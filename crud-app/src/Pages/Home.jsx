import Navbar from "../Components/Navbar";
import { BookOpen, Code2, Cpu } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-['Hind_Siliguri']">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6 border border-green-100">
          <Cpu size={16} />
          <span>Practice Project</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          Welcome to <span className="text-green-600">CRUD APP</span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-10">
          এটি একটি সিম্পল বুক ম্যানেজমেন্ট অ্যাপ্লিকেশন, যা মূলত
          <span className="font-bold text-gray-800"> Redux Toolkit </span>
          ব্যবহার করে স্টেট ম্যানেজমেন্ট এবং CRUD (Create, Read, Update, Delete)
          অপারেশন প্র্যাকটিস করার উদ্দেশ্যে তৈরি করা হয়েছে।
        </p>

        <div className="grid md:grid-cols-2 gap-6 w-full text-left">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4">
              <Code2 size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Tech Stack</h3>
            <p className="text-sm text-gray-500">
              React JS, Redux Toolkit, React Router DOM, and Tailwind CSS.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-10 w-10 bg-gray-900 rounded-lg flex items-center justify-center text-white mb-4">
              <BookOpen size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Core Features</h3>
            <p className="text-sm text-gray-500">
              বই যোগ করা, দেখা, তথ্য আপডেট করা এবং ডিলিট করার সুবিধা।
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 w-full">
          <p className="text-gray-400 text-sm italic">
            Developed by{" "}
            <span className="font-semibold text-gray-600 uppercase tracking-widest">
              Md. Nayan Islam
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
