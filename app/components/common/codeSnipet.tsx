"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Iconify from "@/app/components/common/iconfy";

type Props = {
  code: string;
  language: string;
};

export default function codeSnipet({ code, language }: Props) {
  return (
    <div className=" max-w-screen overflow-auto bg-[#161b1d] p-4 rounded-xl relative">
      <div className=" absolute top-2 right-2">
        <CopyToClipboard text={code}>
          <button className="text-white text-2xl bg-gray-700 rounded-xl p-2 hover:bg-[#30fbd1] hover:text-black transition-all">
            <Iconify icon="tabler:copy" />
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter language={language} style={atelierLakesideDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
