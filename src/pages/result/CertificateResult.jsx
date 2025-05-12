export default function CertificateResult() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 text-center space-y-4">
        <img
          src="/assets/dashboard/result.png"
          alt="Certificate Result"
          className="w-32 sm:w-40 mx-auto"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Cloud Computing Professional Certificate
        </h2>
        <div className="bg-blue-100 text-blue-800 font-semibold p-3 rounded-md">
          Your Score Is 80%
        </div>
      </div>
    </div>
  );
}
