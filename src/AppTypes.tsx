export type Weather = {
  name: string;
  main: {
    temp: number;
    pressure: number;
  };
};

export type Placement = {
  latitude: string;
  longitude: string;
};
