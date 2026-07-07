import { Link } from "react-router-dom";
import { ChatsCircle, VideoCamera, LockKey, Globe, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export default function Welcome() {
  const [lang, setLang] = useState("en");

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 text-black dark:text-white">
      
      {/* BAGIAN ATAS: pt-12 px-6 */}
      <div className="flex-1 flex-col items-center justify-center px-6 pt-12 pb-6">
        
        {/* Logo: w-24 h-24, efek float */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-28 h-28 bg-[#FF0000]/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-24 h-24 bg-[#FF0000] rounded-full flex items-center justify-center text-white shadow-lg animate-[float_3s_ease-in-out_infinite]">
            <ChatsCircle size={48} weight="fill" />
          </div>
          <VideoCamera size={28} weight="duotone" className="absolute -top-2 -right-2 text-[#FF0000] animate-[float_3s_ease-in-out_infinite_0.5s]" />
          <LockKey size={24} weight="duotone" className="absolute -bottom-1 -left-2 text-green-500 animate-[float_3s_ease-in-out_infinite_1s]" />
        </div>

        {/* Teks: mt-2, max-w-xs */}
        <h1 className="text-[28px] leading-9 font-bold text-center">
          Welcome to READTalk
        </h1>
        <p className="mt-2 text-[15px] leading-5 text-neutral-500 dark:text-neutral-400 text-center max-w-[280px]">
          Read our <Link to="/privacy" className="text-[#FF0000] font-medium">Privacy Policies</Link>. Tap "Agree and continue" to accept our <Link to="/tos" className="text-[#FF0000] font-medium">Terms of Service</Link>.
        </p>

        {/* Dropdown: mt-6, h-12 */}
        <div className="mt-6 w-full max-w-[280px]">
          <div className="relative">
            <Globe size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <select 
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="w-full appearance-none h-12 rounded-xl border-neutral-200 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-900 pl-12 pr-10 text-[15px] font-medium focus:border-[#FF0000] focus:outline-none"
            >
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
            <CaretDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* BAGIAN BAWAH: px-6 pb-10 */}
      <div className="w-full px-6 pb-10">
        <Link 
          to="/register" 
          className="flex w-full h-14 items-center justify-center rounded-xl bg-[#FF0000] text-[16px] font-semibold text-white shadow-md transition active:scale-[0.98] hover:bg-[#CC0000]"
        >
          Agree and continue
        </Link>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
