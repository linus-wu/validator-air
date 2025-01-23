export const minLength = (min: number) => {
  return (value: number | string) => {
    const length =
      typeof value === "number" ? value.toString().length : value.length;
    return length >= min;
  };
};

export const maxLength = (max: number) => {
  return (value: number | string) => {
    const length =
      typeof value === "number" ? value.toString().length : value.length;
    return length <= max;
  };
};

export const exactLength = (length: number) => {
  return (value: number | string) => {
    const valueLength =
      typeof value === "number" ? value.toString().length : value.length;
    return valueLength === length;
  };
};
