interface FormValues {
    email: string;
    password: string;
}

interface User {
    name: string,
    email: string,
    password: string
    role: 'admin' | 'user';
}

interface OrderFormProp {
    setOpen: (open: boolean) => void
}

export type { FormValues, User, OrderFormProp };