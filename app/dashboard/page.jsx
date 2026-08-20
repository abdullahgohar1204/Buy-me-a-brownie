"use client";

import React, { useState, useEffect } from "react";
import { getUser, updateUser } from "../../action/user";
import userSession from "next-auth";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    paymentId: "",
    paymentSecret: "",
  });

  useEffect(() => {
    if (session?.user?.email) {
      const loadUser = async () => {
        const user = await getUser(session.user.email);
        if (user) {
          setFormData({
            name: user.name || "",
            email: user.email || "",
            username: user.username || "",
            profilepic: user.profilepic || "",
            coverpic: user.coverpic || "",
            paymentId: user.paymentId || "",
            paymentSecret: user.paymentSecret || "",
          });
        }
        setLoading(false);
      };
      loadUser();
    }
  }, [session]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataobj = new FormData();
    formDataobj.append("email", session.user.email);
    formDataobj.append("name", formData.name);
    formDataobj.append("username", formData.username);
    formDataobj.append("paymentId", formData.paymentId);
    formDataobj.append("paymentSecret", formData.paymentSecret);
    formDataobj.append("profilepic", formData.profilepic);
    formDataobj.append("coverpic", formData.coverpic);

    const result = await updateUser(formDataobj);

    if (result) {
      alert("Profile updated !!");
    }
  };

  if (loading) {
    return <div className="text-white text-center p-10">Loading...</div>;
  }

  return (
    <div className="max-w-full sm:max-w-2xl mx-auto p-4 sm:p-6 bg-slate-800 rounded-lg shadow-lg mt-4 sm:mt-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
        Welcome to your Dashboard
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-1.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-1.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="w-full px-4 py-1.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Profile Picture URL
          </label>
          <input
            type="text"
            name="profilepic"
            value={formData.profilepic}
            onChange={handleChange}
            placeholder="Enter profile picture URL"
            className="w-full px-4 py-1.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 file:mr-4 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Cover Picture URL
          </label>
          <input
            type="text"
            name="coverpic"
            value={formData.coverpic}
            onChange={handleChange}
            placeholder="Enter cover picture URL"
            className="w-full px-4 py-1.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Payment Id
          </label>
          <input
            type="text"
            name="paymentId"
            value={formData.paymentId}
            onChange={handleChange}
            placeholder="Enter Payment Id"
            className="w-full px-4 py-1.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Payment Secret
          </label>
          <input
            type="text"
            name="paymentSecret"
            value={formData.paymentSecret}
            onChange={handleChange}
            placeholder="Enter Payment Secret"
            className="w-full px-4 py-1.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="w-full py-2 px-4 text-sm sm:text-base">Save</button>
      </form>
    </div>
  );
};

export default Dashboard;
