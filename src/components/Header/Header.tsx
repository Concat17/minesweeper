import * as React from "react";

import DropDown from "../Dropdown/Dropdown";

import "./Header.css";

interface HeaderProps {
  flags: number;
  changeDifficulty: (difficulty: string) => object;
}

const Header: React.FC<HeaderProps> = ({
  flags,
  changeDifficulty,
}: HeaderProps) => {
  return (
    <div className="header">
      <span>{flags}</span>
      <select
        className="drodown"
        onChange={(e) => changeDifficulty(e.target.value)}
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
    </div>
  );
};

export default Header;

function onChange(select, changeDifficulty) {
  const value = select.value;
  changeDifficulty(value);
  console.log(value);
}
