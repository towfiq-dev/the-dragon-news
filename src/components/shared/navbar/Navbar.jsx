'use client'
import ActiveNav from './ActiveNav';
import Image from 'next/image';
import Logo from '../../../assets/asset/user.png'
import { authClient, signOut } from '@/lib/auth-client';
import Link from 'next/link';
import { toast } from 'react-toastify';
const Navbar = () => {
  const links = 
  <div className='flex justify-center gap-6'>
    <ActiveNav href={'/'}>Home</ActiveNav>
    <ActiveNav href={'/about'}>About</ActiveNav>
    <ActiveNav href={'/career'}>Career</ActiveNav>
  </div>
  
  const {data: session, isPending} = authClient.useSession()
  if (isPending) {
    return(
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-4">
      <span className="loading loading-bars w-20 text-primary"></span>
      
      <p className="text-lg font-medium text-gray-500 animate-pulse">
        Loading please wait...
      </p>
    </div>
    )
  }
  //console.log(session, 'session');
  const user = session?.user
  const logOut=()=>{
    authClient.signOut()
    toast.success('Sign Out successfully')
  }

  return (
  <div className='mt-8 mb-10'>
    <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div>
      <p className='font-semibold text-center'>{user? user.name: ''}</p>
    <Image width={100} height={100} src={user? user.image : Logo} className='cursor-pointer rounded-full w-7 h-10' alt='Logo'></Image>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <button onClick={()=> logOut()} className="btn btn-primary font-bold w-25">Log Out</button>
      :
      <Link href={'/auth/signin'} className='btn btn-primary'>Log In</Link>
    }
  </div>
  </div>
  </div>
  );
};
export default Navbar;