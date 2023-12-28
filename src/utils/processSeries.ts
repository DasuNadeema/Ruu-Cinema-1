import { Series } from "../redux/types/types";

export const processSeriesData = (inputArray: Series[]): Series[] => {
  return inputArray.map((inputObject) => {
    const outputObject: Series = { ...inputObject };

    for (let i = 1; i <= 20; i++) {
      const linkKey = `link${i}` as keyof Series;
      if (!outputObject[linkKey]) {
        delete outputObject[linkKey];
      }
    }

    return outputObject;
  });
};
