import { nanoid } from "nanoid";
import { BaseSyntheticEvent } from "react";
import { Options } from "../App";

type SelectionMenu = {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  setIsButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
  options: Options;
};

export const SelectionMenu = (props: SelectionMenu) => {
  const { setCityName, setIsButtonClicked, options } = props;

  const handleChange = (e: BaseSyntheticEvent) => {
    setCityName(e.target.value);
    setIsButtonClicked(false);
  };

  return (
    <>
      <select onChange={handleChange}>
        {options.map((option) => (
          <option key={nanoid()}>{option}</option>
        ))}
      </select>
    </>
  );
};
