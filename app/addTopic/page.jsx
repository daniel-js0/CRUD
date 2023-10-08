"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}  className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500  mt-6 text-slate-500 bg-zinc-500 bg-opacity-20  rounded-md md:w-[40%] w-[80%] mx-auto px-8 py-2 placeholder:italic"
        type="text"
        placeholder="Note Title"
      />

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 text-slate-500 bg-zinc-500 bg-opacity-20  rounded-md h-72 mx-auto md:w-[40%] w-[80%] px-8 py-2 placeholder:italic"
        type="text"
        placeholder="type your text here!"
      />

      <button type="submit" className="flex rounded-md md:ml-[59%] mx-auto bg-rose-500 font-semibold text-white py-3 px-6 w-fit">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
                className="mt-1 text-gray-200">
          <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0ZM1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v3.5A1.5 1.5 0 0 1 11.5 6h-7A1.5 1.5 0 0 1 3 4.5V1H1.5a.5.5 0 0 0-.5.5Zm9.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1Z"/>
           </svg> 
          <p className="ml-2">Add Note</p> 
      </button>
    </form>
  );
}