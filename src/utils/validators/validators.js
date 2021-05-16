export const validateEmail = (values) => {
  if (!values) {
    return 'Please, enter e-mail address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
    return 'Invalid email address';
  } else {
    return undefined;
  }
};

export const required = (value) => {
  if (value) {
    return undefined;
  } else {
    return 'Field is required';
  }
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength}`;
  } else {
    return undefined;
  }
};
