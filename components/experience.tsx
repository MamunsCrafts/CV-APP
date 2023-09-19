import { useRouter } from "next/router"
export default function Experience(){
  const router =useRouter()
    return (
      <div>
        <p className="text-xl font-semibold border-b-2 border-spacing-2 border-black">Work Experience</p>
        <div>
          {" "}
          <div className="flex ">
            <p className="text-lg font-bold"> Junior Software Engineer,Talent Pro</p>{" "}
            <p className="text-sm mt-1">,Banani DOHS,Dhaka</p>
          </div>
          <p className="text-slate-600 text-xs">August2023-present</p>
          <ul className="list-disc ml-10 text-sm">
            <li>
            Collaborated with the Front-end team to implement new features.
             
            </li>
            <li>
            Led decision-making meetings for the creation of highly responsive and reusable components.
             
             
            </li>
            <li>Developed APIs using GraphQL to facilitate other developer&apos;s work.</li>
            <li>
            Worked closely with the database team to optimize queries.
            </li>
            <li>
            Engaged in post-sprint meetings with the business team to plan and implement new features for the next sprint.
            </li>
          </ul>
        </div>
       
      </div>
    )
}
