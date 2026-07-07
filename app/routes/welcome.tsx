import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Phone, LockKey, Globe, Heart, ChatText } from "@phosphor-icons/react";

export default function Welcome() {
  const [showLogo, setShowLogo] = useState(true);

  // CEPETIN: 2500ms = 1500 tampil + 400 fade + 600 jeda
  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo(prev =>!prev);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-start justify-center bg-white dark:bg-zinc-950 px-4 pt-8 pb-8 sm:items-center">
      <div className="w-full max-w-[420px] bg-white dark:bg-zinc-950 rounded-2xl">
        <div className="flex flex-col items-center px-6 pt-12 pb-6">

          {/* AREA ILUSTRASI GEDE */}
          <div className="relative w-64 h-64 flex items-center justify-center">

            {/* LOGO 192.PNG */}
            <img
              src="/assets/192.png"
              alt="READTalk Logo"
              className={`w-28 h-28 rounded-2xl shadow-lg absolute z-10 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${showLogo? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            />

            {/* ILUSTRASI NUMPUK BERANTAKAN - WARNA NETRAL */}
            <div className={`absolute w-full h-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${!showLogo? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              
              {/* Chat Bubble Belakang */}
              <ChatText size={160} weight="fill" className="absolute top-4 left-0 text-neutral-200 dark:text-neutral-800 rotate-[-10deg]" />
              {/* Globe */}
              <Globe size={100} weight="fill" className="absolute top-0 right-4 text-neutral-300 dark:text-neutral-700" />
              {/* Chat Bubble Depan */}
              <ChatText size={140} weight="fill" className="absolute bottom-6 left-8 text-neutral-200 dark:text-neutral-800 rotate-[5deg]" />
              {/* Gembok */}
              <LockKey size={70} weight="fill" className="absolute bottom-2 right-6 text-neutral-400 dark:text-neutral-600" />
              {/* Telpon */}
              <Phone size={60} weight="fill" className="absolute top-8 left-4 text-neutral-400 dark:text-neutral-600" />
              {/* Love */}
              <Heart size={50} weight="fill" className="absolute bottom-10 left-4 text-neutral-400 dark:text-neutral-600" />
            </div>
          </div>

          {/* TEKS */}
          <h1 className="mt-6 text-2xl font-bold text-neutral-900 dark:text-white text-center">
            Welcome to READTalk
          </h1>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center leading-5">
            Read our <Link to="/privacy" className="text-neutral-900 dark:text-white font-medium underline">Privacy Policy</Link>. Tap "Agree and continue" to accept the <Link to="/tos" className="text-neutral-900 dark:text-white font-medium underline">Terms of Service</Link>.
          </p>
        </div>

        <div className="w-full px-6 pb-6">
          <Link to="/register" className="flex w-full h-14 items-center justify-center rounded-full bg-neutral-900 dark:bg-white text-base font-semibold text-white dark:text-black shadow-md transition active:scale-[0.98]">
            Agree and continue
          </Link>
        </div>
      </div>
    </div>
  );
}
