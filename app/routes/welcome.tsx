// app/routes/welcome.tsx
import { Link } from "react-router";
import { ChatsCircle, VideoCamera, Globe, LockKey } from "@phosphor-icons/react";

export default function Welcome() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      
      {/* BAGIAN ATAS: Kosong buat dorong ke tengah */}
      <div className="flex-1 flex-col items-center justify-center px-6">
        
        {/* Logo dengan Animasi */}
        <div className="relative flex items-center justify-center">
          {/* Efek glow di belakang */}
          <div className="absolute w-28 h-28 bg-[#FF0000]/20 rounded-full blur-xl animate-pulse" />
          
          {/* Icon Utama */}
          <div className="relative w-24 h-24 bg-[#FF0000] rounded-full flex items-center justify-center text-white shadow-lg animate-[float_3s_ease-in-out_infinite]">
            <ChatsCircle size={48} weight="fill" />
          </div>

          {/* Icon Mengelilingi */}
          <VideoCamera 
            size={28} 
            weight="duotone" 
            className="absolute -top-2 -right-2 text-[#FF0000] animate-[float_3s_ease-in-out_infinite_0.5s]" 
          />
          <LockKey 
            size={24} 
            weight="duotone" 
            className="absolute -bottom-1 -left-2 text-green-500 animate-[float_3s_ease-in-out_infinite_1s]" 
          />
        </div>

        {/* Judul */}
        <h1 className="mt-8 text-3xl font-bold text-neutral-900 dark:text-white text-center">
          Welcome to READTalk
        </h1>

        {/* Deskripsi */}
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-xs leading-relaxed">
          Read our <span className="text-[#FF0000] font-medium">Privacy Policies</span>. Tap "Agree and continue" to accept our <span className="text-[#FF0000] font-medium">Terms of Service</span>.
        </p>

        {/* Dropdown Bahasa */}
        <div className="mt-6 w-full max-w-xs">
          <div className="relative">
            <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <select className="w-full appearance-none rounded-xl border-neutral-200 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-900 px-10 py-3 text-sm text-neutral-700 dark:text-neutral-200 focus:border-[#FF0000] focus:outline-none transition">
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      {/* BAGIAN BAWAH: Tombol Fix di Bawah */}
      <div className="w-full px-6 pb-10">
        <Link 
          to="/register" 
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#FF0000] px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#CC0000] active:scale-[0.97]"
        >
          Agree and continue
        </Link>
      </div>

      {/* Keyframes Float Manual */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
