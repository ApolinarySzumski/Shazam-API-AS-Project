import { BaseSyntheticEvent } from "react";

type Button = {
  handleClick: (e: BaseSyntheticEvent) => void;
};

export const Button = (props: Button) => {
  const { handleClick } = props;

  return <button onClick={handleClick}>Sprawdź aktualną pogodę</button>;
};
