export const number = () => {
  return (value: any) =>
    typeof value === "number" && !isNaN(value) && isFinite(value);
};

export const bigint = () => {
  return (value: any) => typeof value === "bigint";
};

export const string = () => {
  return (value: any) => typeof value === "string";
};

export const boolean = () => {
  return (value: any) => typeof value === "boolean";
};

export const array = () => {
  return (value: any) => Array.isArray(value);
};

export const object = () => {
  return (value: any) => value.constructor === Object;
};
