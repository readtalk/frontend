// app/routes/welcome.tsx
import { Link } from "react-router";

export default function Welcome() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
            <div className="max-w-md w-full text-center">
                {/* Logo Area - Ganti dengan logo READTalk Anda */}
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-[#FF0000] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                        RT
                    </div>
                </div>

                {/* Judul Halaman */}
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                    Welcome to READTalk
                </h1>
                <p className="text-neutral-500 text-sm mb-8">
                    The fastest way to chat with your team and community.
                </p>

                {/* Tombol Aksi */}
                <Link
                    to="/register"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[#FF0000] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#CC0000] hover:shadow-md active:scale-[0.98]"
                >
                    Agree and continue
                </Link>

                {/* Link Ke Login */}
                <p className="mt-6 text-sm text-neutral-500">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="font-medium text-[#FF0000] hover:underline hover:text-[#CC0000] transition"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
