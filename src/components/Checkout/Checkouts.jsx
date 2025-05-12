import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cartItems = [
  { id: 1, title: "Cloud Computing Professional Certificate", price: 6400 },
  { id: 2, title: "Cloud Computing Professional Certificate", price: 6400 },
];

const Checkouts = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    state: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required.";
    if (!form.mobile.match(/^[0-9]{10}$/)) newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!form.country) newErrors.country = "Country is required.";
    if (!form.state) newErrors.state = "State/UT is required.";
    if (!form.paymentMethod) newErrors.paymentMethod = "Select a payment method.";

    return newErrors;
  };

  const handleProceed = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/processing");
    }
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-sky-50">
      {/* Left Section */}
      <div className="lg:w-2/3 p-20 bg-white">
        <a href="#" className="text-sm text-blue-700 inline-block">← MY CART</a>
        <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">CHECKOUT</h2>

        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Billing Address</h3>
          <div className="space-y-4">
            <div>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name *"
                className="border p-3 w-full rounded" />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>
            <div>
              <select name="country" value={form.country} onChange={handleChange}
                className="border p-3 w-full rounded">
                <option value="">Select Country</option>
                <option value="India">India</option>
              </select>
              {errors.country && <p className="text-red-600 text-sm">{errors.country}</p>}
            </div>
            <div>
              <select name="state" value={form.state} onChange={handleChange}
                className="border p-3 w-full rounded">
                <option value="">State / Union Territory</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
              {errors.state && <p className="text-red-600 text-sm">{errors.state}</p>}
            </div>
            <div>
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address"
                className="border p-3 w-full rounded" />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile number"
                className="border p-3 w-full rounded" />
              {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}
            </div>
          </div>
        </div>

        <div>
  <h3 className="font-semibold text-lg text-gray-800 mb-4">Payment Method</h3>
  <div className="space-y-3">
    {[
  { label: "Credit Card", icon: "💳" },
  { label: "UPI", icon: "🏦" },
  {
    label: "PhonePe",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f0/PhonePe_Logo.png",
  },
  {
    label: "Google Pay",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Pay_Logo.svg",
  },
]
.map((method) => (
      <label
        key={method.label}
        className="flex items-center gap-2 border p-3 rounded cursor-pointer"
      >
        <input
          type="radio"
          name="paymentMethod"
          value={method.label}
          checked={form.paymentMethod === method.label}
          onChange={handleChange}
          className="mr-2"
        />
        {method.icon.startsWith("http") ? (
          <img src={method.icon} alt={method.label} className="h-5 w-5 object-contain" />
        ) : (
          <span>{method.icon}</span>
        )}
        <span>{method.label}</span>
      </label>
    ))}
    {errors.paymentMethod && (
      <p className="text-red-600 text-sm">{errors.paymentMethod}</p>
    )}
  </div>
</div>

      </div>

      
      <div className="lg:w-2/4 p-30 bg-sky-100">
        <h3 className="text-lg font-bold mb-6">Order Details</h3>
        <div className="space-y-2 text-sm">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between border-b pb-1">
              <span>{item.title}</span>
              <span>Rs. {item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Order Total</span>
          <span>Rs. {totalAmount.toFixed(2)}</span>
        </div>
        <button
          onClick={handleProceed}
          className="w-full bg-blue-900 text-white py-3 rounded shadow hover:bg-blue-800 font-semibold"
        >
          PROCEED
        </button>
      </div>
    </div>
  );
};

export default Checkouts;
