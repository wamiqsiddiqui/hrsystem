export enum UserRoles {
  Manager = "Manager",
  Admin = "Admin",
  Employee = "Employee",
}

export type AppUser = {
  roles: UserRoles;
};

export type GoogleUser = {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  hd: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: string;
  picture: string;
  sub: string;
};

export type UserObject = GoogleUser & AppUser;

// const o =  freeze({} as GoogleUser)
// const o1 = freeze({
//   a: 3,
//   b:"hello"
// })

// type AppRoles={
//   main: UserRoles
//   secondry : UserRoles
// }

// type MyRoles = Record<"main"|"secondary", UserRoles>

// type GoogleStringProperties = Record<"family_name" |  "given_name"|  "hd"|  "iat"|  "iss"|  "jti"|  "name"|  "nbf"|  "picture"|  "sub" ,string>

// o.email = "m.wamiq@mythod.com"
// o.email = "s.zafar@mythod.com";

// function freeze<T>(arg: T){
//   return Object.freeze(arg)
// }

// function somefunc<T, Q extends GoogleUser>(a: Readonly<T>, b: Readonly<Q>){

// }

// somefunc(true, o)

// Functional programing
/**
 * 
 * 1. data is mutable
  2. higher order function = functions can return or take functions 
 * 
 */

// Method chaining

// class MyClass {
//   public func1() {
//     return this;
//   }
//   public func2() {
//     return this;
//   }
//   public func3() {
//     return this;
//   }
//   public func4() {
//     return this;
//   }
// }

// let obj: MyClass = new MyClass()
// .func1()
// .func2()
// .func3()

//Redux
//.
