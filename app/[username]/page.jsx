"use client";

import React from "react";
import { getUser, updateUser } from "@/action/user";
import { useEffect, useState } from "react";
import { createPayment, getdata } from "@/action/payment";

const User = ({ params }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { username } = React.use(params);
  const [amount, setAmount] = useState(10);
  const [payments, setPayments] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadPayments = async () => {
      const data = await getdata(username);
      setPayments(data);
    };
    loadPayments();
  }, [username]);

  useEffect(() => {
    const loadUser = async () => {
      const data = await getUser(username);
      setUserData(data);
    };
    loadUser();
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("to_user", username);
    formData.append("amount", amount);
    formData.append("message", message);

    await createPayment(formData);

    const updated = await getdata(username);
    setPayments(updated);

    setName("");
    setMessage("");
    setAmount(10);
  };
  return (
    <>
      <div className="w-full h-40 sm:h-48 md:h-64 overflow-hidden relative">
        <img
          className="object-cover w-full h-full"
          src={userData?.coverpic || "https://placehold.co/800x300"}
          alt="Cover"
        />
      </div>

      <div className="flex flex-col items-center -mt-16 relative z-10 pb-10">
        <img
          src={userData?.profilepic || "https://placehold.co/200x200"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl bg-[#090a20]"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${username}&background=6366f1&color=fff&size=128`;
          }}
        />
        <div className="flex flex-col gap-1 sm:gap-2 items-center justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4">
            {userData?.name || username}
          </h2>
          <div className="text-slate-400 text-xs sm:text-sm">
            <p>@{username}</p>
          </div>
          <div className="text-slate-400 text-xs sm:text-sm">
            <p>{payments.length} Members</p>
          </div>
        </div>

        <div className="payments flex flex-col lg:flex-row gap-3 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mt-6 sm:mt-11">
          <div className="supporters w-full lg:w-1/2 bg-[#111448] rounded-lg text-white p-4 sm:p-6 md:p-8 lg:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-center my-3 sm:my-5">
              Supporters
            </h2>
            <ul className="mx-2 sm:mx-5 text-sm sm:text-base lg:text-lg">
              {payments.length === 0 ? (
                <li className="text-center text-gray-400 text-sm">
                  No supporters yet
                </li>
              ) : (
                payments.map((payment, index) => (
                  <li
                    key={index}
                    className="my-2 flex flex-col gap-0.5 bg-slate-700/30 p-2 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/avatar.gif"
                        alt=""
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0"
                      />
                      <span className="font-medium text-sm sm:text-base">
                        {payment.name}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-gray-300 ml-8 sm:ml-10">
                      <span>
                        donated{" "}
                        <span className="font-bold text-white">
                          Rs {payment.amount}
                        </span>
                      </span>
                      {payment.message && (
                        <span>with message "{payment.message}"</span>
                      )}
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="makepayment w-full lg:w-1/2 bg-[#111448] rounded-lg text-white p-4 sm:p-6">
            {" "}
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
              Make a Payment
            </h2>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Enter Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="Enter amount"
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Enter Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Enter Message
                </label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter Message "
                  className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition mb-4">
                Pay
              </button>
            </form>
            <div className="flex gap-1 sm:gap-2">
              <button
                onClick={() => setAmount(20)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg transition text-xs sm:text-sm"
              >
                $20
              </button>
              <button
                onClick={() => setAmount(30)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg transition text-xs sm:text-sm"
              >
                $30
              </button>
              <button
                onClick={() => setAmount(50)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg transition text-xs sm:text-sm"
              >
                $50
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
