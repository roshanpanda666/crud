"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const fetchuser = async () => {
    try {
        let response = await fetch("/api/users", { cache: "no-cache" });
        response = await response.json();
        return response.success ? response.result : [];
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

const Page = () => {
    const [userslist, setUserlist] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const users = await fetchuser();
            setUserlist(users);
        };
        loadUsers();
    }, []);

    return (
        <>
            <div>
                <div>
                    <div>
                        <div className="text-3xl">CRUD</div>
                    </div>
                    <div className="flex justify-end item-end">user list</div>
                </div>

                <div className="mt-5">
                    {userslist.length > 0 ? (
                        userslist.map((item) => (
                            <div key={item._id} className="p-4 rounded mb-3 bg-zinc-800">
                                <div>
                                    <div className="text-gray-500 text-[0.9rem]">
                                        user.{item.user}
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-10">
                                  <div className=" w-96 ">
                                    <div className="text-3xl">Name: {item.name}</div>
                                  </div>
                                  <div className="h-6 border-2 border-gray-700"></div>
                                  <div className=" w-96">
                                    <div className="text-3xl">clg: {item.clg}</div>
                                  </div>
                                  <div className="h-6 border-2 border-gray-700"></div>
                                  <div className=" w-96 ">
                                    <div className="text-2xl text-purple-600">interest: {item.interest}</div>
                                  </div>
                                  <div className="h-6 border-2 border-gray-700"></div>
                                  <div className=" w-96 ">
                                    <Link href={"/userlist/"+item._id}>see blog</Link>
                                  </div>
                                    
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">No users found.</div>
                    )}
                </div>
                <div>
                    <Link href="/adduser">add user</Link>
                </div>
            </div>
        </>
    );
};

export default Page;
