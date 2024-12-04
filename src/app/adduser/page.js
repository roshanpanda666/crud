"use client";
import { useRef } from "react";

import Link from "next/link";
const page = () => {

  const nameref = useRef();
  const collegeref = useRef();
  const blogref = useRef();
  const userref = useRef();
  const interestref = useRef();


  const adduserManage = async () => {

    const nameaf = nameref.current?.value;
    const collegeaf = collegeref.current?.value;
    const blogaf = blogref.current?.value;
    const useraf = userref.current?.value;
    const interestaf = interestref.current?.value;


    if (!nameaf || !collegeaf || !blogaf || !useraf || !interestaf) {
        alert("Please fill all fields.");
        return;
    }

    let response = await fetch("/api/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name: nameaf,
          clg: collegeaf,
          blog: blogaf,
          user: useraf,
          interest: interestaf,
      }),
      

  });
  const result = await response.json();
            if (result.success) {
                alert("Data added successfully!");
                clearInputs();
            } else {
                alert("Failed to add data.");
            }
  }

  const clearInputs = () => {
    nameref.current.value = "";
    collegeref.current.value = "";
    blogref.current.value = "";
    interestref.current.value = "";
    userref.current.value = "";
};

  return (
    <div>
      <div className="flex justify-center items-center h-[90vh] flex-col gap-2">
            <div className="mb-3">Add users</div>
            <div className=" flex flex-col">
                <input
                    type="text"
                    placeholder="name"
                    className="bg-black text-white border-2 text-center mb-3 p-2"
                    ref={nameref}
                />
                <input
                    type="text"
                    placeholder="interest"
                    className="bg-black text-white border-2 text-center mb-3 p-2"
                    ref={interestref}
                />
                <input
                    type="text"
                    placeholder="user number"
                    className="bg-black text-white border-2 text-center mb-3 p-2"
                    ref={userref}
                />
                <input
                    type="text"
                    placeholder="college"
                    className="bg-black text-white border-2 text-center mb-3 p-2"
                    ref={collegeref}
                />
                <div className="h-44">
                <input
                    type="text"
                    placeholder="write your blog"
                    className="bg-black text-white border-2 text-center mb-3 p-2 h-44 w-96"
                    ref={blogref}
                />
                </div>
                
            </div>
            <div className="flex space-x-4 mt-4">
                <button
                    onClick={adduserManage}
                    className="text-cyan-400 hover:border-2 hover:border-cyan-300 w-32 text-center p-2"
                >
                   
                   Add user
                </button>
                <button
                    onClick={clearInputs}
                    className="text-red-400 hover:border-2 hover:border-red-300 w-32 text-center p-2"
                >
                    Clear
                </button>
            </div>
            <div className='flex justify-center items-center mt-5'> 
          <Link href='/userlist'>user list</Link>
                </div>
            

        </div>
    </div>
  )
}

export default page
