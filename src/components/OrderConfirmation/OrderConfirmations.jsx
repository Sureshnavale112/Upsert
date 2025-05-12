const OrderConfirmations = () => (
  <div className=" w-full bg-sky-100 flex items-center justify-center px-4 py-8">
    <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
      <img
        src="/assets/like.png"
        alt="Order Confirmation"
        className="w-32 sm:w-40 mx-auto mb-6"
      />
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3">
        Thank you! Your Order Has Been Received 
      </h2>
      <p className="text-gray-700 mb-4">
        Your purchase was successful. Check your email for details.
      </p>

      <div className="border rounded-lg p-4 sm:p-6 text-left bg-sky-50">
        <h3 className="text-xl sm:text-2xl text-blue-700 font-bold mb-4">
          Order Details
        </h3>
        <p className="mb-3">
          <strong>Certification:</strong> Cloud Computing Professional Certificate
        </p>
        <p className="mb-3">
          <strong>Date & Time:</strong> 20 May 2024, 11:30 AM
        </p>
        <p className="mb-3">
          <strong>Email:</strong> darshana12@gmail.com
        </p>
        <p className="mb-3">
          <strong>Exam Slot:</strong> 30 May 2024, 09:00 AM
        </p>
        <p className="mt-4 font-semibold text-lg">
          <strong>Total Amount:</strong> Rs. 12,800.00
        </p>
      </div>
    </div>
  </div>
);

export default OrderConfirmations;
