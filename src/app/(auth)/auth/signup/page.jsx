'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";

const Register = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  
  const onSubmit = (data)=>{
  console.log(data, 'data');
  const {email, name, photo, password } = data
  
  }
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#F3F3F3] py-12 px-4">
      <div className="max-w-2xl w-full bg-white p-10 md:p-16 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-center text-[#403F3F] mb-8">
          Register your account
        </h2>
        <hr className="mb-8 border-gray-200" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              //required
              {...register("name", {
                required: "Name field is required"
              })}
            />
            {
              errors.name && 
              (<p className="text-red-500 font-semibold">
              {errors.name.message}
              </p>)
            }
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              {...register("photo", {
                required: "Photo field is required"
              })}
            />
            {
              errors.photo && (<p className="text-red-500 font-semibold">{errors.photo.message}</p>)
            }
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              {...register("email", {
                required: "Email field is required"
              })}
              //required
            />
            {
              errors.email && (<p className="text-red-500 font-semibold">{errors.email.message}</p>)
            }
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              {...register("password", {
                required: "Password field is required"
              })}
              //required

            />
            {
              errors.password && (<p className="text-red-500 font-semibold">{errors.password.message}</p>)
            }
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