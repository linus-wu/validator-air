export const email = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (value: any) => typeof value === "string" && emailRegex.test(value);
};
