export const pattern = (regex: RegExp) => {
  return (value: any) => typeof value === "string" && regex.test(value);
};
