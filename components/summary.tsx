import { summery } from "./data";

export default function Summery(){
    return (
      <div className="mt-6">
        <p className="text-xl border-b-2 border-spacing-2 border-black">{summery.field}</p>
        <p className="text-black text-sm text-justify mr-4">
          {summery.description}
         </p>
      </div>
    )
}
