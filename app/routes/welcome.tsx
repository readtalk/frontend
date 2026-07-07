// app/routes/welcome.tsx
import { Link } from "react-router-dom";
import { Globe } from "@phosphor-icons/react";

export default function Welcome() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white dark:bg-zinc-950">

      {/* ATAS - pt-12 px-6 */}
      <div className="flex flex-col items-center px-6 pt-12">

        {/* ILUSTRASI - w-20 h-20, bulat merah */}
        <div className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center text-white shadow-md">
          <span className="text-3xl font-bold">RT</span> {/* SS WA pake gambar, kita pake RT dulu */}
        </div>

        {/* JUDUL - mt-6 text-2xl font-bold */}
        <h1 className="mt-6 text-2xl font-bold text-neutral-900 dark:text-white text-center">
          Welcome to READTalk
        </h1>

        {/* DESKRIPSI - mt-2 text-sm text-center max-w-xs */}
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-[280px] leading-5">
          Read our <a href="/privacy" className="text-[#128C7E]">Privacy Policy</a>. Tap "Agree and continue" to accept the <a href="/tos" className="text-[#128C7E]">Terms of Service</a>.
        </p>

        {/* DROPDOWN - mt-4 w-full max-w-xs */}
        <div className="mt-4 w-full max-w-xs">
          <div className="relative flex items-center justify-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Globe size={18} />
            <select className="appearance-none bg-transparent text-center font-medium focus:outline-none">
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
            </select>
          </div>
        </div>
      </div>

      {/* BAWAH - px-6 pb-10 */}
      <div className="w-full px-6 pb-10">
        <Link
          to="/register"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#128C7E] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition active:scale-[0.98]"
        >
          Agree and continue
        </Link>
      </div>
    </div>
  );
}
