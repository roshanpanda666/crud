"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const page = () => {
  const nameref = useRef();
  const collegeref = useRef();
  const blogref = useRef();
  const userref = useRef();
  const interestref = useRef();

  const [markdownPreview, setMarkdownPreview] = useState("");

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
  };

  const clearInputs = () => {
    nameref.current.value = "";
    collegeref.current.value = "";
    blogref.current.value = "";
    interestref.current.value = "";
    userref.current.value = "";
    setMarkdownPreview("");
  };

  const handleMarkdownChange = (e) => {
    const blogContent = e.target.value;
    setMarkdownPreview(blogContent);
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="mb-3 text-xl font-bold">Add Users</div>
        <div className="flex flex-row gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Name"
            className="bg-black text-white border-2 text-center mb-3 p-2"
            ref={nameref}
          />
          <input
            type="text"
            placeholder="Interest"
            className="bg-black text-white border-2 text-center mb-3 p-2"
            ref={interestref}
          />
          <input
            type="text"
            placeholder="User Number"
            className="bg-black text-white border-2 text-center mb-3 p-2"
            ref={userref}
          />
          <input
            type="text"
            placeholder="College"
            className="bg-black text-white border-2 text-center mb-3 p-2"
            ref={collegeref}
          />
        </div>
        <div className="w-[80vw]">
          <textarea
            placeholder="Write your blog here...  how to use markdown :- , **bold** , *italic* , #heading , ##subheading , ###section , -bullet ,Image: ![Alt Text](https://example.com/image.jpg) , `code`  , Link: [Link Text](https://example.com) → Link Text"
            className="bg-black text-white border-2 p-2 w-full h-[50vh] resize-none"
            ref={blogref}
            onChange={handleMarkdownChange}
          />
          
        </div>
        <div className="w-[80vw] border-t border-gray-500 pt-4 mt-4">
          <h2 className="text-lg font-semibold mb-2">Markdown Preview</h2>
          <div className="bg-gray-900 text-white p-4 rounded-md">
            <ReactMarkdown>{markdownPreview}</ReactMarkdown>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={adduserManage}
            className="text-cyan-400 hover:border-2 hover:border-cyan-300 w-32 text-center p-2"
          >
            Add User
          </button>
          <button
            onClick={clearInputs}
            className="text-red-400 hover:border-2 hover:border-red-300 w-32 text-center p-2"
          >
            Clear
          </button>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link href="/">User List</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
