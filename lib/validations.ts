export const required = (value: any) =>
  !value || value.length <= 0 ? "Required" : undefined;

export const url = (value: string) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // Fragment locator

  return pattern.test(value) ? undefined : "Must be a URL";
};

const maxLength = (max: number) => (value: string) =>
  value && value.length > max
    ? `Must have ${max} characters or less`
    : undefined;

export const maxLength1024 = maxLength(1024);
export const maxLength512 = maxLength(512);
export const maxLength120 = maxLength(120);
export const maxLength16 = maxLength(16);

const minLength = (min: number) => (value: string) =>
  value && value.length < min
    ? `Must have ${min} characters or more`
    : undefined;

export const minLength6 = minLength(6);

export const number = (value: number) =>
  value && Number.isNaN(Number(value)) ? "Must be a number" : undefined;

const minValue = (min: number) => (value: number) =>
  value && value < min ? `Must be Greater than ${min}` : undefined;

export const minValue13 = minValue(13);

export const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid e-mail"
    : undefined;

export const alphanumeric = (value: string) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export const pngOnly = (value: File) =>
  value && value.type !== "image/png" ? "Only PNG allowed" : undefined;

export const svgOnly = (value: File) =>
  value && value.type !== "image/svg+xml" ? "Only SVG allowed" : undefined;

export const composeValidators =
  (...validators: ((value: any) => string | undefined)[]) =>
  (value: any) =>
    validators.reduce<string | undefined>(
      (error, validator) => error || validator(value),
      undefined
    );
