export default function Projects(){
    return (
      <div>
        <p className="text-xl font-semibold border-b-2 border-spacing-2 border-black">Projects</p>
        <div>
          {" "}
         
          <p className="text-xl font-bold">FANFARE- Admin Panel</p>
          <p className="text-md font-semibold">Technology Stack: Typescript, Next.Js, Redux, MUI, React-hook-form.</p>
          <ul className="list-disc text-sm ml-10">
            <li>Proficient in designing user interfaces utilizing Material UI components.</li>
            <li>Make reusable components for the benefit of fellow developers.</li>
            <li> Use Typescript everywhere for strong type checking.</li>
         
            <li>

            Use graphql apollo client for api query.
            </li>
       
            
            <li>

            Separate service layer from component and use ioc container for making each
service singleton and reuse their instance for performance.
            </li>
          
          </ul>
        </div>
        <div>
          {" "}
          <p className="text-lg font-bold">FANFARE- API-Server</p>
          <p className="text-md font-semibold">Technology Stack: Typescript, Nest.Js, Graphql, MongoDB</p>
          <ul className="list-disc text-sm ml-10">
            <li>Create api Agile basis for implementing features of the application.</li>
            <li>Use FireStore for real time data  store </li>
            <li>Use apollo server for implementing Graphql to query on api.</li>
            <li> Use mongodb for the database</li>
            <li>Write each service function using proper algorithms for reducing time
complexity and memory consumption.</li>
            <li>

            Implementing the e-commerce feature to the application.

            </li>
            <li>

            Extend performance of api by modifying schema design structure and proper
indexing of the document for avoiding colscan when possible.

            </li>
           
          </ul>
        </div>
        <div>
          {" "}
          <p className="text-lg font-bold">Inventory Management(Car Showroom)</p>
          <p className="text-md font-semibold">Technology Stack: Typescript, Nextjs, Rest API, MySql,Sequelize ORM,TailwindCSS</p>
          <ul className="list-disc text-sm ml-10">
            
            <li>Using Redux for state management</li>
            <li>Utilizing TypeScript for strict type checking.</li>
            <li>Using Next.js for both server and client-side</li>
          
           
           
           
          </ul>
        </div>
      </div>
    )
}
