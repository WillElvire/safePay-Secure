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
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  countryCode: string;
  password ?: string;
  role: {
    id: string;
  };
}
