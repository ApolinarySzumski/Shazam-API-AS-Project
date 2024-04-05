import { BaseSyntheticEvent } from "react";

type AddCityForm = {
  handleSubmit: (e: BaseSyntheticEvent) => void;
  handleChange: (e: BaseSyntheticEvent) => void;
  cityToAdd: string;
};

export const AddCityForm = (props: AddCityForm) => {
  const { handleSubmit, handleChange, cityToAdd } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Wprowadź nazwe miasta"
        value={cityToAdd}
        onChange={handleChange}
      />
      <button type="submit">Dodaj miasto</button>
    </form>
  );
};
