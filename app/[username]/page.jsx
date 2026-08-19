"use client";

import React from "react";
import { useState } from "react";

const User = ({ params }) => {
  const { username } = React.use(params);
  const [amount, setAmount] = useState(10);
  return (
    <>
      <div className="w-full h-64 overflow-hidden relative">
        <img
          className="object-cover w-full h-full"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5071619/e4846ec4209e4e0f8c7aa1d9aa2652b6/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/2.jpg?token-hash=v23YBcW9ZeIWiO8INKxFL321BsWvJwZTk4poVFPcR24%3D&token-time=1788480000"
          alt="Cover"
        />
      </div>

      <div className="flex flex-col items-center -mt-16 relative z-10 pb-10">
        <img
          src="/assets/profilepicuter.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl bg-gray-800"
          onError={(e) => {
            e.target.src =
              "https://ui-avatars.com/api/?name=" +
              username +
              "&background=6366f1&color=fff&size=128";
          }}
        />
        <div className="flex flex-col gap-2 items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold text-white mt-4">{username}</h2>
          </div>
          <div className="text-slate-400">
            <p>Art histroy dinosaurs and blah blah</p>
          </div>
          <div className="text-slate-400">
            <p>1000 Memebers 69 Posts 100 Releases</p>
          </div>
        </div>

        <div className="payments flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-500 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold text-center my-5">Supporters</h2>
            <ul className="mx-5">
              <li className="my-2">
                Shubam donated 400 with message "xxxxxxx"
              </li>
              <li className="my-2">
                Shubam donated 400 with message "xxxxxxx"
              </li>
              <li className="my-2">
                Shubam donated 400 with message "xxxxxxx"
              </li>
              <li className="my-2">
                Shubam donated 400 with message "xxxxxxx"
              </li>
            </ul>
          </div>

          <div className="makepayment w-1/2 bg-slate-800 rounded-lg text-white p-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              Make a Payment
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Enter Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Enter amount"
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition mb-4">
              Pay ${amount}
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => setAmount(10)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-3 rounded-lg transition text-sm"
              >
                Pay $10
              </button>
              <button
                onClick={() => setAmount(20)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-3 rounded-lg transition text-sm"
              >
                Pay $20
              </button>
              <button
                onClick={() => setAmount(30)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-3 rounded-lg transition text-sm"
              >
                Pay $30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
