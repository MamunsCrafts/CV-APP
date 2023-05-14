import { project } from "./data";

export default function Projects(){
    return (
      <div>
        <p className="text-xl font-semibold border-b-2 border-spacing-2 border-black">{project.field}</p>
        <div>
          {" "}
          <p className="text-lg font-bold">{project.projectName}</p>
          <ul className="list-disc text-sm ml-10">
            {project.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}

            <li className=" text-blue-700 font-semibold">
              <a href="https://github.com/Mamun1646/Alumni_And_Information_Management_System">Source Code</a>
            </li>
          </ul>
        </div>
      </div>
    )
}
