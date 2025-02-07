export const integer = () => {
  return (value: any) => typeof value === "number" && Number.isInteger(value);
};

export const decimal = () => {
  return (value: any) => typeof value === "number" && !Number.isInteger(value);
};

export const positive = () => {
  return (value: any) => typeof value === "number" && value > 0;
};

export const negative = () => {
  return (value: any) => typeof value === "number" && value < 0;
};

export const greaterThan = (compareValue: number) => {
  return (value: any) => typeof value === "number" && value > compareValue;
};

export const lessThan = (compareValue: number) => {
  return (value: any) => typeof value === "number" && value < compareValue;
};

export const even = () => {
  return (value: any) => typeof value === "number" && value % 2 === 0;
};

export const odd = () => {
  return (value: any) => typeof value === "number" && value % 2 !== 0;
};

export const range = (min: number, max: number) => {
  return (value: number) => value >= min && value <= max;
};

export const decimalPlaces = (decimalPlaces: number) => {
  return (value: any) => {
    if (typeof value !== "number") return false;

    const decimalPart = value.toString().split(".")[1];
    return decimalPart && decimalPart.length === decimalPlaces;
  };
};
