import { User } from './../interface/Api';
export const mapUser = (value: any) => {
  let user: User = {
    firstname: value.firstname,
    lastname: value.lastname,
    email: value.email,
    countryCode: value.countryCode,
    password : value.password,
    phone: value.phone,
    role: {
      id: value.roleId,
    },
  };

  console.log(user);
  return user;
};