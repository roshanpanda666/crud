import Link from "next/link";
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
        <div>
            <div>
            <div className="p-4 rounded mb-3 bg-zinc-800">
                                <div>
                                    <div className="text-gray-500 text-[0.9rem]">
                                        user:{result.user}
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-10">
                                  <div className=" w-96 ">
                                    <div className="text-3xl">Name: {result.name}</div>
                                  </div>
                                  <div className="h-6 border-2 border-gray-700"></div>
                                  <div className=" w-96">
                                    <div className="text-3xl">clg: {result.clg}</div>
                                  </div>
                                  <div className="h-6 border-2 border-gray-700"></div>
                                  <div className=" w-96 ">
                                    <div className="text-2xl text-purple-600">interest: {result.interest}</div>
                                  </div>
                                  <div className="h-6 border-2 border-gray-700"></div>
                                    
                                </div>
                               
                            </div>
                            <div> <div>
                                    <Link href="/"> see all users</Link>
                                </div>
                            </div>
                            <div>
                                blog:
                            </div>
                            <div>
                                {result.blog}
                            </div>
            </div>
        </div>
    );
}
