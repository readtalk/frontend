// app/routes/welcome.tsx
import { Link } from "react-router-dom";
import { ChatsCircle, Globe, CaretDown } from "@phosphor-icons/react";

export default function Welcome() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white dark:bg-zinc-950">
      
      {/* BAGIAN ATAS: pt-12 px-6 - sama kayak WA */}
      <div className="flex flex-col items-center px-6 pt-12">
        
        {/* Logo: w-20 h-20 - SAMA KAYAK KODE LU AWAL */}
        <div className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center text-white shadow-lg">
          <ChatsCircle size={40} weight="fill" /> {/* Ganti RT text jadi icon */}
        </div>

        {/* Judul: mt-6 text-3xl - SAMA KAYAK REGISTER LU */}
        <h1 className="mt-6 text-3xl font-bold text-neutral-900 dark:text-white text-center tracking-tight">
          Welcome to READTalk
        </h1>

        {/* Deskripsi: mt-2 text-sm - SAMA KAYAK REGISTER LU */}
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-xs leading-5">
          Read our <Link to="/privacy" className="text-[#FF0000] font-medium">Privacy Policies</Link>. Tap "Agree and continue" to accept our <Link to="/tos" className="text-[#FF0000] font-medium">Terms of Service</Link>.
        </p>

        {/* Dropdown: mt-4 w-full max-w-xs - SAMA KAYAK KODE LU AWAL */}
        <div className="mt-4 w-full max-w-xs">
          <div className="relative">
            <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <select className="w-full appearance-none rounded-lg border border-neutral-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-10 py-2 text-sm text-neutral-700 dark:text-neutral-200 focus:border-[#FF0000] focus:outline-none focus:ring-1 focus:ring-[#FF0000]">
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
            <CaretDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* BAGIAN BAWAH: px-6 pb-10 - SAMA KAYAK WA */}
      <div className="w-full px-6 pb-10">
        <Link 
          to="/register" 
          className="inline-flex w-full items-center justify-center rounded-lg bg-[#FF0000] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#CC0000] active:scale-[0.98]" // py-2 px-3 SAMA KAYAK REGISTER
        >
          Agree and continue
        </Link>
      </div>
    </div>
  );
}
