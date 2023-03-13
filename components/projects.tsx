export default function Projects(){
    return (
      <div>
        <p className="text-xl font-semibold border-b-2 border-spacing-2 border-black">Academic Projects</p>
        <div>
          {" "}
          <p className="text-lg font-bold">Alumni and Information Management System</p>
          <ul className="list-disc text-sm ml-10">
            <li>This website was built with reactjs, material ui, and nodejs.</li>
            <li>This software may be registered and accessed by both students and teachers.</li>
            <li>Teachers can send mass emails to students in a certain session.</li>
            <li>Allumni can publish job suggestions and job openings etc.</li>
            <li >

              <p className="italic underline text-blue-600 text-xs hover:cursor-pointer">
                Code Link : https://github.com/Mamun1646/Alumni_And_Information_Management_System
              </p>
            </li>
          </ul>
        </div>
      </div>
    )
}
