import LoginCard from "@/components/login/card_login";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className='h-screen w-screen bg-gradient-to-r from-blue-300'>
      <ToastContainer />
      <LoginCard/>
    </main>
  )
}
