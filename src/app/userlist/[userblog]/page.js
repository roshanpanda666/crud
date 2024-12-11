import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Blog({ params }) {
    const { userblog } = params;

    const response = await fetch(`http://localhost:3000/api/users/${userblog}`, {
        cache: "no-cache", // Ensures fresh data
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user blog");
    }

    const { result } = await response.json(); // Destructure `result` from the API response

    if (!result) {
        throw new Error("No user data found");
    }

    return (
        <div className="min-h-screen bg-black text-white p-5">
            <div className="p-6 rounded-lg bg-gray-900 shadow-lg">
                <div className="flex flex-col gap-4 mb-6">
                    <div className="text-gray-400 text-sm">User ID: {result.user}</div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-xl font-semibold">Name: <span className="text-cyan-400">{result.name}</span></div>
                        <div className="text-xl font-semibold">College: <span className="text-green-400">{result.clg}</span></div>
                        <div className="text-xl font-semibold">Interest: <span className="text-purple-400">{result.interest}</span></div>
                    </div>
                </div>

                <div className="my-6">
                    <Link href="/">
                        <div className="text-blue-400 hover:underline">See all users</div>
                    </Link>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">User Blog</h2>
                    <div className="p-4 rounded-lg bg-gray-800 text-white">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.blog}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}
