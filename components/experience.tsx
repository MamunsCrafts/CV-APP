import { useRouter } from "next/router"
import { workExperience } from "./data"
export default function Experience(){
  const router =useRouter()
    return (
      <div>
        <p className="text-xl font-semibold border-b-2 border-spacing-2 border-black">{workExperience[0].field}</p>
        {workExperience.map((work,idx) => (
          <div key={idx}>
            {" "}
            <div className="flex flex-col ">
              <p className="text-lg font-bold"> {work.institution}</p>

              <p className="text-md "> {work.subTag}</p>

            </div>
            <p className="text-slate-600 text-xs">{work.time}</p>
            <ul className="list-disc ml-10 text-sm">
              {work.description.map((item,idx)=>
               <li>
                {item}

              </li>)}


            </ul>
          </div>
        ))}

      </div>
    )
}
