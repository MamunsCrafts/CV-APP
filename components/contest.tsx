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
              <a className="text-blue-700 font-semibold" href="https://codeforces.com/profile/Mamun">
                Codeforces
              </a>{" "}
              online Judge.
            </li>
            <li>
              100 + problem solved in{" "}
              <a className="text-blue-700 font-semibold" href="https://leetcode.com/Mamun16/">
                Leetcode
              </a>
              .
            </li>
            <li>
              100+ problem solved in different Judges.{" "}
              <a className="text-blue-700 font-semibold" href="https://www.stopstalk.com/user/profile/Mamun_16">
                StopStalk Link
              </a>
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
