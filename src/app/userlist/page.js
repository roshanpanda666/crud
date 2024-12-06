"use client";
import { useEffect, useState } from "react";

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
    const [userslist, setUserlist] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const loadUsers = async () => {
            const users = await fetchuser();
            setUserlist(users);
        };
        loadUsers();
    }, []); // Empty dependency array to run only on component mount

    return (
        <div>
            <h1 className="text-center text-lg font-bold">User List</h1>
            <div className="mt-5">
                {userslist.length > 0 ? (
                    userslist.map((item) => (
                        <div key={item._id} className="p-4 border rounded mb-3">
                            <div><strong>Name:</strong> {item.name}</div>
                            <div><strong>College:</strong> {item.clg}</div>
                            <div><strong>Blog:</strong> {item.blog}</div>
                            <div><strong>User ID:</strong> {item.user}</div>
                            <div><strong>Interest:</strong> {item.interest}</div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No users found.</div>
                )}
            </div>
        </div>
    );
};

export default Page;
