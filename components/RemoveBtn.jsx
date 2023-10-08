"use client";

import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    // const confirmed = confirm("Are you sure?");

    // if (confirmed) {
      const res = await fetch(`/api/notes?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      }
    // }
  };

  return (
    <button  onClick={removeTopic}  className="text-red-400">
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"
                     className="lg:mt-[11.8%] bg-rose-500 rounded-md text-gray-100 px-1 py-1   md:w-7 md:h-7 h-5 w-5 "
                     >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/> <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
      </svg>
    </button>
  );
}
