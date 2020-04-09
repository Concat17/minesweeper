import * as React from "react";

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
      <div className="flags">
        <i className="fas fa-flag fa-2x flag-icon"></i>
        <div className="flag-count">{flags}</div>
      </div>
      <h1 className="title">Minesweeper</h1>
      <div className="difficult-selector">
        <div className="difficult-selector-border">
          <select onChange={(e) => changeDifficulty(e.target.value)}>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
