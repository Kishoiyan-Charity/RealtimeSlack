import React from "react";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return <div>Header: {title}</div>;
};
