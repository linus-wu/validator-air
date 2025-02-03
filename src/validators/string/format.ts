export const alpha = () => {
  const alphaRegex = /^[A-Za-z]+$/;
  return (value: any) => typeof value === "string" && alphaRegex.test(value);
};

export const alphaNumeric = () => {
  const alphanumericRegex = /^[A-Za-z0-9]+$/;
  return (value: any) =>
    typeof value === "string" && alphanumericRegex.test(value);
};

export const uppercase = () => {
  return (value: any) =>
    typeof value === "string" && value === value.toUpperCase();
};

export const lowercase = () => {
  return (value: any) =>
    typeof value === "string" && value === value.toLowerCase();
};

export const containsUppercase = () => {
  const uppercaseRegex = /[A-Z]/;
  return (value: any) =>
    typeof value === "string" && uppercaseRegex.test(value);
};

export const containsLowercase = () => {
  const lowercaseRegex = /[a-z]/;
  return (value: any) =>
    typeof value === "string" && lowercaseRegex.test(value);
};

export const startsWith = (prefix: string) => {
  return (value: any) => typeof value === "string" && value.startsWith(prefix);
};

export const endsWith = (suffix: string) => {
  return (value: any) => typeof value === "string" && value.endsWith(suffix);
};

export const numericString = () => {
  const numericRegex = /^[0-9]+$/;
  return (value: any) => typeof value === "string" && numericRegex.test(value);
};
