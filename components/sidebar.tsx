import Image from 'next/image'
import { bechelorEducation, hsc, personalInfo, skills, ssc } from './data'
export default function Sidebar(){
    return (
      <div className="bg-black text-white w-80 px-2 rounded-l-lg ">
        <div className="pt-10">
          <Image
            src="/formal.jpg"
            alt="Picture of Mamun"
            className="rounded-full mx-auto h-24"
            width={100}
            height={50}
          />
        </div>
        <div className="mt-10 mx-5 space-y-2">
          <p className="text-xl">Personal Info</p>

          <div className="flex space-x-2">
            <Image src="/email.png" alt="Picture of Mamun" width={20} height={20} />
            <p className="text-xs">{personalInfo.email}</p>
          </div>
          <div className="flex space-x-2">
            <Image src="/phone-call.png" alt="Picture of Mamun" width={20} height={20} />
            <p className="text-xs">{personalInfo.mobile}</p>
          </div>
          <div className="flex space-x-2">
            <Image src="/location.png" alt="Picture of Mamun" width={20} height={20} />
            <p className="text-xs">{personalInfo.address}</p>
          </div>
        </div>
        <div className="mt-10 mx-5 space-y-2">
          <p className="text-xl ">Education</p>
          <div className="flex space-x-3">
            <div className="space-y-2">
              <p className="bg-white rounded-full w-2 h-2 text-xs mt-[9px]"></p>
              <p className="bg-white rounded-full w-[1px] h-10 text-xs ml-[2px]"></p>
            </div>
            <div>
              <p className="text-sm">{bechelorEducation.degree}</p>
              <p className="text-sm">{bechelorEducation.bechelor_insititution}</p>
              <p className="text-xs">{bechelorEducation.time}</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="space-y-2">
              <p className="bg-white rounded-full w-2 h-2 text-xs mt-[9px]"></p>
              <p className="bg-white rounded-full w-[1px] h-6 text-xs ml-[2px]"></p>
            </div>
            <div>
              <p className="text-sm">{hsc.result}</p>
              <p className="text-xs">{hsc.collegeName}</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="space-y-2">
              <p className="bg-white rounded-full w-2 h-2 text-xs mt-[9px]"></p>
              <p className="bg-white rounded-full w-[1px] h-6 text-xs ml-[2px]"></p>
            </div>
          <div>
            <p className="text-sm">{ssc.result}</p>
            <p className="text-xs">{ssc.schoolName}</p>
          </div>
          </div>

        </div>

        <div className="mt-6 mx-5">
          <p className="text-xl">{skills.field}</p>
          {skills.description.map((item: string) => (
            <>
              <p>{item}</p>
              <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
                <div className="bg-white h-2 " style={{ width: "85%" }} />
              </div>
            </>
          ))}
        </div>

        <div className="mt-6 mx-5">
          <p className="text-xl">Languages</p>
          <p>English</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "75%" }} />
          </div>
          <p>Bangla</p>
          <div className="w-32 bg-gray-600  h-2 mb-4 dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    )
}
