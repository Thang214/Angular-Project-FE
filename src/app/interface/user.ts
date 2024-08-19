export interface IUSER {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  id?: string;
  role?: any;
}
