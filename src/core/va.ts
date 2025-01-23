type Validator = (value: any) => boolean;

interface VaOptions {
  validators: Validator[];
  match?: "ALL" | "ANY";
}

export const va = (
  value: any,
  ...args: [Validator, ...Validator[]] | [VaOptions]
): boolean => {
  let validators: Validator[];
  let match: "ALL" | "ANY" = "ALL";

  if (
    args.length === 1 &&
    typeof args[0] === "object" &&
    "validators" in args[0]
  ) {
    const options = args[0] as VaOptions;
    validators = options.validators;
    match = options.match || "ALL";
  } else {
    validators = args as Validator[];
  }

  if (match === "ANY") {
    return validators.some((validator) => validator(value));
  }
  return validators.every((validator) => validator(value));
};
