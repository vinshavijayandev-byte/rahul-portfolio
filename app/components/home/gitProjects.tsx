import * as React from "react";

const projectList: string[] = [
  "Paper-stream-webinar",
  "vysakh5/Paper-stream-webinar",
  "rn-vysakh/dashbord",
  "ecom-dashbord-vy",
  "rn-vysakh/ecom-dashbord-vy",
  "deepscan_white_b_v0.3",
  "vysakh5/deepscan_white_b_v0.3",
  "vysakh5/rn_frontend",
  "deepscaner_backend_reg",
  "vysakh5/deepscaner_backend_reg",
  "ve-commerce",
  "vysakh5/ve-commerce",
  "ve_com_frontend",
  "typescript-boilerplate",
  "vysakh5/typescript-boilerplate",
  "vysakh5/Portfolio-site",
  "deepscanner",
  "vysakh5/deepscanner",
];

const githubUrl: string = "https://github.com";
const gitAvatar: string = "https://avatars.githubusercontent.com/u/35005612";

const GitProjects: React.FunctionComponent = () => {
  return (
    <>
      <div className=" grid  grid-cols-1 md:grid-cols-6">
        {projectList.map((name, index) => (
          <div
            key={index}
            className="flex  gap-2 justify-start font-mono transition-all hover:bg-gradient-to-br from-[#35fddb] to-[#00c3ff] shadow-2xl shadow-[#a6c7f2] items-center  w-[200px] h-[50px] overflow-hidden truncate bg-white m-2 p-2 rounded-xl "
          >
            <img
              src={gitAvatar}
              alt="vysakh git avatar"
              className="w-6 h-6 rounded-full"
            />
            <a
              href={`${githubUrl}/${name}`}
              target="_blank"
              rel="noreferrer"
              className="truncate text-sm"
            >
              {name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default GitProjects;
