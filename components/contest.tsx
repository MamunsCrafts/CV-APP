export default function Contest(){
  return (
    <div>
      <p className="text-xl font-semibold border-b-2 border-spacing-2 border-black">
        Contest and Problem Solving Information
      </p>
      <div>
        {" "}
        <p className="text-lg font-bold">Contest</p>
        <ul className="list-disc ml-10 text-sm">
          <li>
            82+ Contest and 620+ problem solved in{" "}
            <a  href="https://codeforces.com/profile/Mamun">
              Codeforces
            </a>{" "}
            online Judge.
            <p className="text-blue-700 underline hover:cursor-pointer text-sm italic">
              Link : https://codeforces.com/profile/Mamun{" "}
            </p>
          </li>
          <li>
            100 + problem solved in{" "}
            <a  href="https://leetcode.com/Mamun16/">
              Leetcode
            </a>
            .
            <p className="text-blue-700 hover:cursor-pointer underline text-sm italic">
              Link : https://leetcode.com/Mamun16/{" "}
            </p>
          </li>
          <li>
            100+ problem solved in different Judges.{" "}
            <a  href="https://www.stopstalk.com/user/profile/Mamun_16">
              StopStalk Link
            </a>
            <p className="text-blue-700 hover:cursor-pointer underline text-sm italic">
              Link : https://www.stopstalk.com/user/profile/Mamun_16{" "}
            </p>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-lg font-bold">Achievment</p>

        <ul className="list-disc ml-10 text-sm">
          <li>5th Rank Domestic and 272th rank Global in IEEE Xtreme 14.0</li>
          <li>3rd place ICE intra-department programming contest 2019.</li>
          <li>4th place RUSC programming contest 2021.</li>
          <li>7th place VUPC Intra University Programming Contest 2022</li>
        </ul>
      </div>
    </div>
  )
}