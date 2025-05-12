import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentProcessings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate an API check or timeout
    const timer = setTimeout(() => {
      // Replace this logic with real payment status from API
      const paymentStatus = "success"; // or "failed", "cancelled"

      if (paymentStatus === "success") {
        navigate("/success");
      } else {
        navigate("/payment-failure");
      }
    }, 3000); // Simulates a 3-second processing time

    return () => clearTimeout(timer); // Clean up if component unmounts
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src="/assets/PaymentPending.png" alt="Payment Processing" className="w-64 mx-auto mb-6" />
      <h2 className="text-xl font-bold mb-4 text-blue-800">YOUR PAYMENT IS BEING PROCESSED</h2>
      <p className="text-gray-600">Your payment is currently being processed. This may take a few moments...</p>
    </div>
  );
};

export default PaymentProcessings;
