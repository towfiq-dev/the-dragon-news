import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F3F3F3] py-12 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-center text-[#403F3F] mb-8">
          Login your account
        </h2>
        <hr className="mb-8 border-gray-200" />
        
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Email address
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

          <button
            type="submit"
            className="w-full py-4 cursor-pointer bg-[#403F3F] text-white font-semibold rounded-md hover:bg-black transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600 font-medium">
          Dont Have An Account?{" "}
          <Link href={'/auth/signup'} className="text-[#F75B5F] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;