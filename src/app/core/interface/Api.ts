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

export interface Address {
  address: string;
  createdAt?: string;
  id?: string;
  name: string;
  priority?: number;
  status?: number;
  updatedAt?: string;
}

export interface PublicationPayload {
  title: string;
  quantity: number;
  price: number;
  description: string;
  monnaie_echange: string;
  monnaie_a_recevoir: string;
  address: string;
  userId: string;
}

export interface Publication {
  active: boolean;
  createdAt: string;
  id: string;
  updatedAt: string;
  verify: boolean;
  detail: Detail;
}

export interface Detail {
  address: string;
  createdAt: string;
  description: string;
  id: string;
  keyword: string;
  monnaie_a_recevoir: string;
  monnaie_echange: string;
  price: number;
  quantity: number;
  title: string;
  updatedAt: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  createdAt: string;
  id: string;
  transactionDetail: TransactionDetail;
  transactionType: TransactionType;
  updatedAt: string;
}

export interface Billing {
  active: boolean;
  createdAt: string;
  expriationDate: string;
  id: string;
  status: number;
  updatedAt: string;
  mean_of_payment: string,
  address : string
}

export interface TransactionType {
  createdAt: string;
  id: string;
  libelle: string;
  name: string;
  updatedAt: string;
}
export interface TransactionDetail {
  amount: string;
  billing: Billing;
  createdAt: string;
  id: string;
  isValid: false;
  reason: string;
  updatedAt: string;
  valid: false;

}
