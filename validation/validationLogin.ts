import { TFunction } from "i18next";

export interface FormValues {
  mobile: string;
  password: string;
}

export const validate = (values: FormValues, t: TFunction) => {
  const errors: Partial<FormValues> = {};

  if (!values.mobile) {
    errors.mobile = t("validation.mobileRequired");
  } else if (!/^\+20\d{10}$/.test(values.mobile)) {
    errors.mobile = t("validation.mobileFormat");
  }

  if (!values.password) {
    errors.password = t("validation.passwordRequired");
  } else if (values.password.length < 8) {
    errors.password = t("validation.passwordLength");
  }

  return errors;
};
