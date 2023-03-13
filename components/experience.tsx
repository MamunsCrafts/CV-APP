export default function Experience(){
    return (
      <div>
        <p className="text-2xl font-bold border-b-2 border-spacing-2 border-black">Work Experience</p>
        <div>
          {" "}
          <div className="flex ">
            <p className="text-lg font-bold"> Junior Software Engineer,Talent Pro</p>{" "}
            <p className="text-lg text-slate-400">,Banani DOHS,Dhaka</p>
          </div>
          <p className="text-slate-600 text-xs">February2023-present</p>
          <ul className="list-disc ml-10 text-sm">
            <li>
              I created a software application for Car Showroom (Inventory management) that increased the company's
              efficiency.
            </li>
            <li>We utilized object-oriented design principles to develop high-quality software applications.</li>
            <li>
              My position entails full stack web development with tools such as nextjs, tailwindcss, nestjs, graphql,
              and mongodb.
            </li>
          </ul>
        </div>
        <div>
          <div className="flex ">
            <p className="text-lg font-bold"> Software Engineer Intern,Talent Pro</p>{" "}
            <p className="text-lg text-slate-400">,Banani DOHS,Dhaka</p>
          </div>
          <p className="text-slate-600 text-xs">Auagst2022-February2023</p>
          <ul className="list-disc ml-10 text-sm">
            <li>I made the Quran Analyzer App with Nextjs, Tailwindcss, Nestjs, and Mongodb.</li>
          </ul>
        </div>
      </div>
    )
}
