import * as React from "react";

import "./Dropdown.css";

interface DropDownProps {
  options: string[];
}

const DropDown: React.FC<DropDownProps> = ({ options }: DropDownProps) => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  return (
    <select
      className="drodown"
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
