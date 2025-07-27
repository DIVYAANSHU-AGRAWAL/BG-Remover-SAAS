import React from 'react';

const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-start pt-14 mb-10 px-4">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">
        Choose a Plan
      </h1>
      <br />

      {/* Plans Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div className="border p-6 rounded-lg shadow-md text-left transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-black">
          <h2 className="text-xl font-bold mb-2">Starter Plan</h2>
          <p className="text-gray-600 mb-4">Perfect for beginners</p>
          <p className="text-2xl font-semibold mb-4">$9/month</p>
          <ul className="text-sm text-gray-500 mb-4 list-disc list-inside space-y-1">
            <li>100 image credits</li>
            <li>Email support</li>
            <li>Basic API access</li>
          </ul>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>

        {/* Advanced Plan */}
        <div className="border p-6 rounded-lg shadow-md text-left transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-black">
          <h2 className="text-xl font-bold mb-2">Advanced Plan</h2>
          <p className="text-gray-600 mb-4">For growing users</p>
          <p className="text-2xl font-semibold mb-4">$19/month</p>
          <ul className="text-sm text-gray-500 mb-4 list-disc list-inside space-y-1">
            <li>500 image credits</li>
            <li>Priority support</li>
            <li>Advanced API access</li>
          </ul>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>

        {/* Business Plan */}
        <div className="border p-6 rounded-lg shadow-md text-left transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-black">
          <h2 className="text-xl font-bold mb-2">Business Plan</h2>
          <p className="text-gray-600 mb-4">Best for teams</p>
          <p className="text-2xl font-semibold mb-4">$49/month</p>
          <ul className="text-sm text-gray-500 mb-4 list-disc list-inside space-y-1">
            <li>Unlimited image credits</li>
            <li>Dedicated support</li>
            <li>Team access & usage reports</li>
          </ul>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCredit;
