
import { useNavigate } from "react-router-dom";



const Payment = () => {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
         <img src="/assets/PaymentSuccessful.png" alt="Payment Failed" className="w-64 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-green-600">YOUR PAYMENT IS SUCCESSFUL!</h2>
        <p className="mb-4">Exam details will be shared via email.</p>
        <button onClick={() => navigate("/order-confirmation")} className="bg-blue-600 text-white px-4 py-2 rounded">
          BACK TO HOME
        </button>
      </div>
    );
  };
  
  export default Payment;