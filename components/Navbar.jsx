"use client"
import Link from "next/link";

export default function Navbar({darkmode, setDarkmode}) {

  
function handleToggle(){

  setDarkmode(!darkmode);
  }
  
  return (
    <div className="flex flex-col">
    <nav className="flex fixed top-0 justify-between z-20 items-center px-2 md:px-8 py-3  w-[100%]  md:h-20 h-20 bg-zinc-800">
     <div className='flex '>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
         className={`md:ml-4  h-7 w-7 mt-2 md:mt-4 text-slate-300 max-[281px]:mt-5`}>
       <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
       <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
       </svg> 
      
     <div className='w-[0.02rem] h-12 bg-gray-400 ml-3 mt-1 md:flex hidden '></div>
       
      <Link  href={"/"}>
      <h2 className={`lg:text-3xl  mt-3 ml-2 text-lg md:ml-4 font-semibold tracking-widest md:mt-2 text-slate-300  leading-tight `}>NOTEPAD</h2>
      </Link>
     
       
     </div>
     


     <div className="flex">

             <div className="flex  md:ml-3 mr-3 mt-4 ml-5" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                          className="mt-4 mr-1 w-6 h-6 text-slate-400" viewBox="0 0 16 16">
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                            </svg>
                   
                      
                          <label  className="relative">
                          <input type= "checkbox"
                          className={`cursor-pointer appearance-none mt-3.5 h-6 rounded-full w-12  ${darkmode ? 'bg-rose-500': 'bg-gray-400'}`} />
                      
                      {!darkmode ? (<span onClick={handleToggle} className="cursor-pointer bg-white w-5 h-5 ml-0.5 mt-4 rounded-full transition-transform duration-300 transform absolute start-0"></span>) :
                      
                          (<span onClick={handleToggle}  className="cursor-pointer bg-white w-5 h-5 mr-0.5 mt-4 rounded-full transition-transform duration-300 transform absolute end-0"></span>)}
                          </label>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="mt-4 ml-2 w-5 h-5 text-slate-400" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/> <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                         </svg>
                      
                </div> 

            <Link  href={"/addTopic"}>
                <button className='flex mr-5 bg-rose-500 py-2 lg:px-3 px-1 md:mt-4 mt-6 md:mb-4 mb-5 rounded-md max-[600px]:mr-3 max-[600px]:px-2 md:ml-3 ml-1'>
               
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                className="md:w-6 md:h-6 max-[600px]:w-5 max-[600px]:h-5 max-[600px]:mt-[1.5%] max-[281px]:hidden 
                text-gray-50 mt-1 font-bold" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <p className='ml-2 mt-1  font-semibold mr-2 md:flex hidden text-gray-200'>Add Notes</p>
              </button>
            </Link>

           
      
     </div>
  
    </nav>
     <div className={`fixed z-10  w-[100%] h-5 mt-20 ${darkmode ? 'bg-gray-600' : 'bg-gray-300'} `}></div>
    </div>



  );
}


