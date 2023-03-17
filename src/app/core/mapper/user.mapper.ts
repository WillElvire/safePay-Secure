export const  mapUser = (value: any) => {
  let user: any = {
    firstname: value.firstname,
    lastname: value.lastname,
    email: value.email,
    countryCode: value.countryCode,
    password : value.password,
    phone: value.phone,
    roleId : value.roleId,
  };
  //console.log(user);
  return user;
};


export const mapAddress = (value : any) => {
  let address : any = {
    name : value.name,
    address : value.address,
    user_id :  value.id
  }
  console.log(address);
  return address;
}
