export const required = value => (!value ? 'Required' : undefined);

const maxLength = max => (
  value => (
    (value && value.length > max) ? `Must have ${max} characters or less` : undefined
  )
);

export const maxLength120 = maxLength(120);
export const maxLength16 = maxLength(16);

const minLength = min => (
  value => (
    (value && value.length < min) ? `Must have ${min} characters or more` : undefined
  )
);

export const minLength6 = minLength(6);

export const number = value => (value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined);

const minValue = min => (
  value => (
    (value && value < min) ? `Must be Greater than ${min}` : undefined
  )
);

export const minValue13 = minValue(13);

export const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid e-mail'
    : undefined
);

export const alphanumeric = value => (
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
);