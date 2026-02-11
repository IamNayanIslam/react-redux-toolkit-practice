import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        পেজটি খুঁজে পাওয়া যায়নি
      </h2>
      <p className="text-gray-600 mb-8">
        দুঃখিত, আপনি যে পাতাটি খুঁজছেন তা হয়তো সরিয়ে ফেলা হয়েছে অথবা লিংকটি ভুল।
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200"
      >
        হোমপেজে ফিরে যান
      </Link>
    </div>
  );
};

export default Error;
