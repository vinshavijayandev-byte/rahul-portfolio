import React from "react";
import Link from "next/link";

type PropsType = {
  title: string;
  desc: string;
  img: string;
  link: string;
  date: string;
  author: string;
};

export default function BlogCardMd(data: PropsType) {
  return (
    <>
      <div className="bg-gray-100/50 p-3 rounded-2xl flex flex-col justify-between hover:bg-white/50 hover:shadow-2xl shadow-sky-100/50 transition-all ">
        <Link href={data.link}>
          <img
            src={data.img}
            alt={data.title}
            className="w-full h-60 object-cover rounded-xl "
          />
        </Link>
        <div className="bg-white p-2 my-2 rounded-2xl">
          <Link href={data.link}>
            <h2 className="text-xl font-semibold hover:underline transition-all">
              {data.title}
            </h2>
          </Link>
          <p className="my-2 text-sm text-gray-600">{data.desc}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>{data.date}</p>
          <p>{data.author}</p>
        </div>
      </div>
    </>
  );
}
