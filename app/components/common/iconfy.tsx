"use client";
import React from "react";
import { Icon } from "@iconify/react";

interface IconfyProps {
  icon: string;
  className?: string;
}

const Iconify: React.FC<IconfyProps> = ({ icon, className }) => {
  if (!icon) return null;

  return <Icon icon={icon} className={className} />;
};

export default Iconify;
