// "use client";

import Link from "next/link";

// import { useRouter } from "next/navigation";

// 
export default function ViewNote({ title, description }) {
  

//   const router = useRouter();

  
  return (
   <div>
    <h1 className="border border-rose-500 mt-6 text-slate-500 bg-rose-300 bg-opacity-20 rounded-md md:w-[40%] w-[80%] mx-auto px-8 py-2 placeholder:italic"
        >{title}</h1>
    <p className="border mt-3 overflow-hidden overflow-x-auto overflow-y-auto  border-rose-500   text-slate-500 bg-rose-300 bg-opacity-20  rounded-md h-72 mx-auto md:w-[40%] w-[80%] px-8 py-2 placeholder:italic"
        >{description}</p>
    <Link href={"/"}>
       <button type="submit" className="flex rounded-md md:ml-[30%] mx-auto mt-2 bg-gray-800 font-semibold text-white py-3 px-4 w-fit">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
           className="mt-1 text-gray-200" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
            </svg> 
          <p className="ml-2">Back to home</p> 
      </button>
      </Link>
   </div>
  );
}