export interface FormProps {
    firstName: string;
    lastName: string;
    age: number;
    agreeToTerms?: boolean;
}

export interface FormState {
    submitted?: boolean;
    fullName: string;
    age: number;
}