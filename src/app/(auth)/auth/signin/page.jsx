'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()
  const onSubmit = async(data)=>{
  const {email, password } = data
  const {data: res, error} = await authClient.signIn.email({
    email: email,
    password: password,
    //callbackURL: '/'
  })

  if(res){
   toast.success('Congratulation. you are successfully sigh in')
   router.push('/')
  }if (error) {
    toast.error(error.message || "Something went wrong. Please try again.");
  }

  }
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F3F3F3] py-12 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-center text-[#403F3F] mb-8">
          Login your account
        </h2>
        <hr className="mb-8 border-gray-200" />
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Email address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email field is required"
              })}
              placeholder="Enter your email address"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              
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
              type={show? 'text' : 'password'}
              {...register("password", {required: "password field is required"})}
              placeholder="Enter your password"
              className="w-full px-4 py-4 bg-[#F3F3F3] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              
            />
            <span className="cursor-pointer w-8" onClick={()=>setShow(!show)}>
              {
                show? <FaEye/>: <FaEyeSlash/>
              }
            </span>
            {errors.password && (
              <p className="text-red-500 font-semibold">
                {errors.password.message}
              </p>)}
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