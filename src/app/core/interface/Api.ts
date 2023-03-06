export interface CountryDialCode {
  name: string;
  dial_code: string;
  code: string;
}

export interface MResultMessage {
  code: any;
  message: string;
  returnObject: object | object[];
}

export interface Role {
  name: string;
  id: string;
}

export interface User {
  billing?: any;
  countryCode?: string;
  createdAt?: string;
  email: string;
  firstname: string;
  id?: string;
  isActive?: boolean;
  isCertifed?: boolean;
  lastname: string;
  password: string;
  phone: string;
  role: {
    id: string;
    name?: string;
  };
  transactions?: any;
  updatedAt?: string;
  useWeb3?: string;
}
