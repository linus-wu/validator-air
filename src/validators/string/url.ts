export const url = () => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return (value: any) => typeof value === "string" && urlRegex.test(value);
};
