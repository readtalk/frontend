// app/routes/welcome.tsx
import { Link } from "react-router-dom";
import { Phone, LockKey, Globe, Heart, ChatsCircle } from "@phosphor-icons/react";

export default function Welcome() {
  return (
    // FULL SCREEN - SAMA KAYAK WA
    <div className="flex min-h-screen flex-col justify-between bg-white dark:bg-zinc-950">

      {/* BAGIAN ATAS: pt-12 px-6 - SAMA KAYAK WA */}
      <div className="flex flex-col items-center px-6 pt-12">

        {/* ILUSTRASI: Ini bagian yg plek WA. 5 icon dalam 1 frame */}
        <div className="relative w-48 h-48 flex items-center justify-center">

          {/* LOGO UTAMA: /public/assets/192.png di tengah */}
          <img
            src="/assets/192.png"
            alt="READTalk Logo"
            className="w-24 h-24 rounded-2xl shadow-lg animate-[fadeIn_0.4s_ease-out]" // fadeIn doang, static
          />

          {/* ICON KECIL KELILING: Pake Phosphor. Posisi plek WA */}
          <ChatsCircle size={32} weight="fill" className="absolute top-2 left-4 text-neutral-300 dark:text-neutral-700 animate-[fadeIn_0.4s_ease-out_0.1s]" />
          <Phone size={24} weight="fill" className="absolute top-6 right-2 text-neutral-300 dark:text-neutral-700 animate-[fadeIn_0.4s_ease-out_0.2s]" />
          <LockKey size={28} weight="fill" className="absolute bottom-8 left-2 text-neutral-300 dark:text-neutral-700 animate-[fadeIn_0.4s_ease-out_0.3s]" />
          <Globe size={26} weight="fill" className="absolute bottom-4 right-6 text-neutral-300 dark:text-neutral-700 animate-[fadeIn_0.4s_ease-out_0.4s]" />
          <Heart size={22} weight="fill" className="absolute top-1/2 -right-2 text-neutral-300 dark:text-neutral-700 animate-[fadeIn_0.4s_ease-out_0.5s]" />
        </div>

        {/* JUDUL: mt-6 text-2xl - SAMA KAYAK WA */}
        <h1 className="mt-6 text-2xl font-bold text-neutral-900 dark:text-white text-center">
          Welcome to READTalk
        </h1>

        {/* DESKRIPSI: mt-2 text-sm max-w-[280px] - SAMA KAYAK WA */}
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-[280px] leading-5">
          Read our <Link to="/privacy" className="text-[#FF0000] font-medium">Privacy Policy</Link>. Tap "Agree and continue" to accept the <Link to="/tos" className="text-[#FF0000] font-medium">Terms of Service</Link>.
        </p>

        {/* DROPDOWN: mt-4 - SAMA KAYAK WA. Tanpa border */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          <Globe size={18} />
          <select className="appearance-none bg-transparent text-center focus:outline-none">
            <option value="en">English</option>
            <option value="id">Bahasa Indonesia</option>
          </select>
        </div>
      </div>

      {/* BAGIAN BAWAH: px-6 pb-10 - SAMA KAYAK WA */}
      <div className="w-full px-6 pb-10">
        {/* TOMBOL: rounded-full h-14 - SAMA BENTUKNYA KAYAK WA TAPI WARNA MERAH */}
        <Link
          to="/register"
          className="flex w-full h-14 items-center justify-center rounded-full bg-[#FF0000] text-base font-semibold text-white shadow-md transition active:scale-[0.98] hover:bg-[#CC0000]"
        >
          Agree and continue
        </Link>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
