import Image from 'next/image'
export default function Sidebar(){
    return (
      <div className="bg-black text-white w-80 rounded-l-lg ">
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
          <p className="text-2xl">Personal Info</p>

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
            <p className="text-xs">T.B. Gate, Mohakhali, Dhaka-1212</p>
          </div>
        </div>
        <div className="mt-10 mx-5 space-y-2">
          <p className="text-2xl ">Education</p>
          <div className="flex space-x-3">
            <div className="space-y-2">
              <p className="bg-white rounded-full w-2 h-2 text-xs mt-[9px]"></p>
              <p className="bg-white rounded-full w-[1px] h-10 text-xs ml-[2px]"></p>
            </div>
            <div>
              <p className="text-lg">Bsc Engineering(3.16)</p>
              <p className="text-sm">University of Rajshahi</p>
              <p className="text-sm">January2017-June2022</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="space-y-2">
              <p className="bg-white rounded-full w-2 h-2 text-xs mt-[9px]"></p>
              <p className="bg-white rounded-full w-[1px] h-6 text-xs ml-[2px]"></p>
            </div>
            <div>
              <p className="text-lg">Hsc(5.00)</p>
              <p className="text-sm">Holy Land College,Dinajpur</p>
            </div>
          </div>
        </div>

        <div className="mt-6 mx-5">
          <p className="text-2xl">Skills</p>

          <p>Nextjs</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "85%" }} />
          </div>
          <p >Reactjs</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "85%" }} />
          </div>
          <p >Tailwind Css</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "95%" }} />
          </div>
          <p >Nestjs</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "75%" }} />
          </div>
          <p >MongoDb</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "85%" }} />
          </div>
          <p >MySQL</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "75%" }} />
          </div>
          <p >GraphQL</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "70%" }} />
          </div>
        </div>

        <div className="mt-6 mx-5">
          <p className="text-2xl">Languages</p>
          <p>English</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "75%" }} />
          </div>
          <p>Bangla</p>
          <div className="w-32 bg-gray-600  h-2 mb-4 dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "100%" }} />
          </div>
        </div>

        <div className="mt-6 mx-5 pb-20">
          <p className="text-2xl">Link</p>
          <p className="underline">Codeforces</p>
          <p className="underline">LinkedIn</p>
        </div>
      </div>
    )
}
