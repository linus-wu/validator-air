export const required = () => {
  return (value: any) => value !== null && value !== undefined && value !== "";
};
