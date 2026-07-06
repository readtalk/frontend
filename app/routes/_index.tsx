// app/routes/_index.tsx
import { Link } from "react-router";

export default function Index() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 p-6">
            <div className="text-center">
                <div className="text-7xl mb-4">💬</div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    READTalk
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Chat yang enak, di mana pun.
                </p>
                <Link
                    to="/register"
                    className="block w-full max-w-md mx-auto mt-8 bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold py-3 rounded-full transition"
                >
                    Agree and continue
                </Link>
            </div>
        </div>
    );
}
