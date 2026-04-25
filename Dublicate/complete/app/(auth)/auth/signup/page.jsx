import Link from "next/link";

const Register = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#F3F3F3] py-12 px-4">
      <div className="max-w-2xl w-full bg-white p-10 md:p-16 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-center text-[#403F3F] mb-8">
          Register your account
        </h2>
        <hr className="mb-8 border-gray-200" />

        <form>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500"
              required
            />
            <label htmlFor="terms" className="ml-2 cursor-pointer text-gray-600 font-medium">
              Accept <span className="font-bold">Term & Conditions</span>
            </label>
          </div>

          <button 
            type="submit"
            className="w-full cursor-pointer py-4 bg-[#403F3F] text-white font-semibold rounded-md hover:bg-black transition duration-300"
          >
            Register
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-600">
            Already have an account? <Link href={'/auth/signin'} className="text-[#F75B5F] font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;