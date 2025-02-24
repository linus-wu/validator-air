const isValidDate = (value: any): value is Date =>
  value instanceof Date && !isNaN(value.getTime());

export const isDate = () => {
  return (value: any) => isValidDate(value);
};

export const pastDate = (options: { inclusive?: boolean } = {}) => {
  const { inclusive = false } = options;
  return (value: any) => {
    if (!isValidDate(value)) return false;
    const now = new Date();
    return inclusive ? value <= now : value < now;
  };
};

export const futureDate = (options: { inclusive?: boolean } = {}) => {
  const { inclusive = false } = options;
  return (value: any) => {
    if (!isValidDate(value)) return false;
    const now = new Date();
    return inclusive ? value >= now : value > now;
  };
};

export const dateRange = (
  startDate: Date,
  endDate: Date,
  options: { inclusive?: boolean } = {}
) => {
  const { inclusive = true } = options;
  return (value: any) => {
    if (!isValidDate(value)) return false;
    if (inclusive) {
      return value >= startDate && value <= endDate;
    }
    return value > startDate && value < endDate;
  };
};

export const weekday = () => {
  return (value: any) => {
    if (!isValidDate(value)) return false;
    const day = value.getDay();
    return day >= 1 && day <= 5;
  };
};

export const weekend = () => {
  return (value: any) => {
    if (!isValidDate(value)) return false;
    const day = value.getDay();
    return day === 0 || day === 6;
  };
};

export const isoDate = (options: { strict?: boolean } = {}) => {
  const { strict = true } = options;
  return (value: any) => {
    if (typeof value !== "string") return false;

    if (strict) {
      const isoDateRegex = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/;
      return isoDateRegex.test(value) && !isNaN(Date.parse(value));
    }

    return !isNaN(Date.parse(value));
  };
};

export const minDate = (min: Date) => {
  return (value: any) => {
    if (!isValidDate(value)) return false;
    return value >= min;
  };
};

export const maxDate = (max: Date) => {
  return (value: any) => {
    if (!isValidDate(value)) return false;
    return value <= max;
  };
};

export const sameDay = (compareDate: Date) => {
  return (value: any) => {
    if (!isValidDate(value)) return false;
    return (
      value.getFullYear() === compareDate.getFullYear() &&
      value.getMonth() === compareDate.getMonth() &&
      value.getDate() === compareDate.getDate()
    );
  };
};

export const age = (minAge: number, maxAge?: number) => {
  return (value: any) => {
    if (!isValidDate(value)) return false;

    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (maxAge !== undefined) {
      return age >= minAge && age <= maxAge;
    }
    return age >= minAge;
  };
};
