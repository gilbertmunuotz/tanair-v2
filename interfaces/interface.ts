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

export type { FormValues, User };