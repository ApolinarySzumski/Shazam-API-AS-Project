import { BaseSyntheticEvent } from "react";

type SelectionMenu = {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  setIsButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SelectionMenu = (props: SelectionMenu) => {
  const { setCityName, setIsButtonClicked } = props;

  const handleChange = (e: BaseSyntheticEvent) => {
    setCityName(e.target.value);
    setIsButtonClicked(false);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="Suwalki">Suwałki</option>
        <option value="Elbląg">Elbląg</option>
        <option value="Warsaw">Warszawa</option>
        <option value="Gdansk">Gdańsk</option>
        <option value="Krakow">Kraków</option>
      </select>
    </div>
  );
};
