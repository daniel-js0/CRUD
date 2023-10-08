import Link from "next/link";
import RemoveBtn from "./RemoveBtn";



const getTopics = async () => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/notes`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch notes");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading notes: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
     {/* <div>hello</div> */}
     <div className="grid md:grid-cols-4 grid-cols-2 md:px-0 px-2 md:mt-6 mt-3">

      {topics.map((t) => (
        <Link href={`/viewTopic/${t._id}`}  key={t._id}>
        <div
          key={t._id}
          className={`md:p-4 px-1 py-2 border w-[90%]  h-44 mx-auto border-zinc-400 hover:border-rose-600   overflow-hidden relative hover:scale-110 hover:bg-zinc-200 rounded-md my-3 flex justify-between gap-5 items-start
           bg-zinc-500 bg-opacity-20`}> 
              <div>
                <h2 className="font-bold md:text-2xl text-lg capitalize tracking-wider text-slate-600">{t.title}</h2>
                <div className=" md:text-sm text-xs  truncat text-slate-400">{t.description}</div>
              </div>

          <div className="flex gap-2 mt-2 absolute md:end-3 end-2 top-1">
          
           
            <Link href={`/editTopic/${t._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
          className='text-rose-500 ml-2 mt-1    md:h-6 md:w-6 w-5 h-5 py-1 px-1' viewBox="0 0 16 16"
                    >
                     <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                     </svg>
            </Link>
            <RemoveBtn id={t._id} />
          </div>
         </div>
      </Link>

      ))} 
         </div>
    </>
  );
}