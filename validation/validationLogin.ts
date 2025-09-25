//validationLogin.ts
export interface FormErrors {
    phone: string;
    password: string;
}
export const validateField = (name: "phone" | "password", value: string): FormErrors | null => {
    let newErrors: FormErrors = { phone: "", password: "" };
    if (name === "phone") {
        newErrors.phone = !/^\d{11}$/.test(value) ? "Phone number must be 11 digits" : "";
    }
    if (name === "password") {
        newErrors.password = value.length < 8 ? "Password must be at least 8 characters" : "";
    }
    return newErrors;
};