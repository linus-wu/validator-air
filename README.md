# Validator-Air

Validator-Air is a lightweight and flexible validation library for JavaScript and TypeScript. It provides a simple way to validate data using built-in and custom validation rules.

## Installation

Install Validator-Air via npm or yarn

```bash
npm install validator-air
```

or

```bash
yarn add validator-air
```

## Usage

Validator-Air supports both CommonJS and ESModule import styles

**CommonJS**

```javascript
const va = require("validator-air");
const { minLength, email } = require("validator-air");
```

**ESModule**

```javascript
import va, { minLength, email } from "validator-air";
```

### Basic Example

#### Using Validators Directly

```javascript
import va, { minLength, email } from "validator-air";

const result = va("hello@example.com", minLength(5), email());

console.log(result); // true
```

#### Using Configuration Object

```javascript
import va, { string, alpha, containsUppercase } from "validator-air";

const result = va("Apple", {
  validators: [string(), alpha(), containsUppercase()],
});

console.log(result); // true
```

### Custom Validators

Define a custom validator to validate specific rules

```javascript
import va from "validator-air";

const lengthBetween = (min, max) => (value) =>
  value.length >= min && value.length <= max;

const result = va("hello", lengthBetween(3, 6));

console.log(result); // true
```

### Using Match Modes

#### Match "ALL" (Default)

```javascript
import va, { email, url } from "validator-air";

const result = va("hello@example.com", {
  validators: [email(), url()],
  match: "ALL",
});

console.log(result); //false
```

#### Match "ANY"

```javascript
import va, { email, url } from "validator-air";

const result = va("hello@example.com", {
  validators: [email(), url()],
  match: "ANY", // Passes if any of the validators return true
});

console.log(result); //true
```

## API Reference

### `va(value, ...args)`

#### Parameters

- `value`: The value to validate.
- `args`: Pass validators directly or use a configuration object.

#### Configuration Object

The configuration object supports the following properties

- `validators`: An array of validator functions.
- `match`: Determines the validation strategy. Can be:
  - `"ALL"` (default): All validators must return `true`.
  - `"ANY"`: At least one validator must return `true`.

#### Returns

`boolean`: The result of the validation.

### Validator Function

A `Validator` is a function with the following signature

```typescript
type Validator = (value: any) => boolean;
```

### Built-in Validators

| Validator              | Description                                                                     | Parameters                                                           |
| ---------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `required()`           | Ensures the value is not null, undefined, or an empty string.                   |                                                                      |
| `number()`             | Validates if the value is a number.                                             |                                                                      |
| `bigint()`             | Validates if the value is a bigint.                                             |                                                                      |
| `string()`             | Validates if the value is a string.                                             |                                                                      |
| `boolean()`            | Validates if the value is a boolean.                                            |                                                                      |
| `array()`              | Validates if the value is a array.                                              |                                                                      |
| `object()`             | Validates if the value is a object.                                             |                                                                      |
| `minLength(min)`       | Ensures the value has a minimum length.                                         | `min` (_number_): The minimum length.                                |
| `maxLength(max)`       | Ensures the value has a maximum length.                                         | `max` (_number_): The maximum length.                                |
| `exactLength(length)`  | Ensures the value has an exact length.                                          | `length` (_number_): The exact length.                               |
| `integer()`            | Validates if the value is an integer.                                           |                                                                      |
| `decimal()`            | Validates if the value is a decimal (non-integer) number.                       |                                                                      |
| `positive()`           | Ensures the value is a positive number (greater than 0).                        |                                                                      |
| `negative()`           | Ensures the value is a negative number (less than 0).                           |                                                                      |
| `greaterThan(value)`   | Ensures the value is greater than a specific number.                            | `value` (_number_): The number to compare.                           |
| `lessThan(value)`      | Ensures the value is less than a specific number.                               | `value` (_number_): The number to compare.                           |
| `even()`               | Validates if the value is an even number.                                       |                                                                      |
| `odd()`                | Validates if the value is an odd number.                                        |                                                                      |
| `range(min, max)`      | Ensures the value is within a specified numeric range.                          | `min` (_number_): Minimum value.<br>`max` (_number_): Maximum value. |
| `decimalPlaces(count)` | Ensures the value has a specific number of decimal places.                      | `count` (_number_): Required decimal places.                         |
| `alpha()`              | Ensures the value contains only alphabetic characters (A-Z, a-z).               |                                                                      |
| `alphaNumeric()`       | Ensures the value contains only alphanumeric characters (A-Z, a-z, 0-9).        |                                                                      |
| `uppercase()`          | Validates if the value contains only uppercase letters.                         |                                                                      |
| `lowercase()`          | Validates if the value contains only lowercase letters.                         |                                                                      |
| `containsUppercase()`  | Ensures the value contains at least one uppercase letter.                       |                                                                      |
| `containsLowercase()`  | Ensures the value contains at least one lowercase letter.                       |                                                                      |
| `startsWith(prefix)`   | Validates if the value starts with a specific prefix.                           | `prefix` (_string_): The prefix to check.                            |
| `endsWith(suffix)`     | Validates if the value ends with a specific suffix.                             | `suffix` (_string_): The suffix to check.                            |
| `numericString()`      | Validates if the value is a string consisting only of numeric characters (0-9). |                                                                      |
| `email()`              | Validates if the value is a valid email address.                                |                                                                      |
| `url()`                | Validates if the value is a valid URL.                                          |                                                                      |
| `pattern(regex)`       | Validates if the value matches a specific regular expression.                   | `regex` (_RegExp_): The pattern to test.                             |

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! If you'd like to improve Validator-Air, please fork the repository and submit a pull request.
