export default function Contest(){
    return (
      <div>
        <p className="text-xl font-semibold border-b-2 border-spacing-2 border-black">
          Contest and Problem Solving Information
        </p>
        <div>
          {" "}
          <p className="text-lg font-bold">Problem Solving</p>
          <ul className="list-disc ml-10 text-sm">
            <li>
              100+ problem solved in{" "}
              <a className="text-blue-700 font-semibold" href="https://codeforces.com/profile/Mamun">
                Codeforces
              </a>{" "}
              online Judge.
            </li>
            <li>
              90 + problem solved in{" "}
              <a className="text-blue-700 font-semibold" href="https://leetcode.com/Mamun16/">
                Leetcode
              </a>
              .
            </li>
            <li>
            50+ problem solved in{" "}
              <a className="text-blue-700 font-semibold" href="https://leetcode.com/Mamun16/">
                HackerRank
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    )
}
