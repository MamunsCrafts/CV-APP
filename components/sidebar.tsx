import Image from 'next/image'
export default function Sidebar(){
    return (
      <div className="bg-teal-900 text-white w-80 px-2 rounded-l-lg ">
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
            <p className="text-xs">mamun.ru.ice@gmail.com</p>
          </div>
          <div className="flex space-x-2">
            <Image src="/phone-call.png" alt="Picture of Mamun" width={20} height={20} />
            <p className="text-xs"> 01770540432</p>
          </div>
          <div className="flex space-x-2">
            <Image src="/location.png" alt="Picture of Mamun" width={20} height={20} />
            <p className="text-xs">Kochukhet,Dhaka</p>
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
              <p className="text-sm">Bsc Engineering</p>
              <p className="text-sm">University of Rajshahi</p>
              <p className="text-xs">January2017-June2022</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="space-y-2">
              <p className="bg-white rounded-full w-2 h-2 text-xs mt-[9px]"></p>
              <p className="bg-white rounded-full w-[1px] h-6 text-xs ml-[2px]"></p>
            </div>
            <div>
              <p className="text-sm">Hsc(5.00)</p>
              <p className="text-xs">Holy Land College,Dinajpur</p>
            </div>
          </div>
        </div>

        <div className="mt-6 mx-5">
          <p className="text-xl">Skills</p>

          <p>Nextjs</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "85%" }} />
          </div>
          <p>Reactjs</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "85%" }} />
          </div>
          <p>Tailwind Css</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "95%" }} />
          </div>
          <p>Nestjs</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "75%" }} />
          </div>
          <p>MongoDb</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "85%" }} />
          </div>
          <p>MySQL</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "75%" }} />
          </div>
          <p>GraphQL</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "70%" }} />
          </div>
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

        <div className="mt-6 mx-5 flex-col pb-20">
          <p className="text-xl">Link</p>

          <p>
            <a href="https://github.com/Mamun1646" className="underline text-sx">
              Github
            </a>
          </p>
          <p>
            <a href="https://portfolio-delta-five-81.vercel.app/" className="underline text-sx">
              Portfolio
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/almamunmim1611177146/" className="underline text-sx">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    )
}
