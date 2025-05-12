import { useNavigate } from "react-router-dom";

const PaymentFailures = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src="/assets/PaymentFail.png" alt="Payment Failed" className="w-64 mx-auto mb-6" />
      <h2 className="text-2xl font-bold text-red-600">PAYMENT FAILED!</h2>
      <p className="mb-4 text-gray-700">Unfortunately, your payment could not be processed at this time.<br/>Please try again or use a different payment method.</p>
      <button onClick={() => navigate("/checkout")} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        RETRY PAYMENT
      </button>
    </div>
  );
};

export default PaymentFailures;
