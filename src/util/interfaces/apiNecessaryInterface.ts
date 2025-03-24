export interface ApiObject {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  authentication?: boolean;
  urlencoded?: boolean;
  arrayBufferType?: boolean;
  multipart?: boolean;
  isWithoutPrefix?: boolean;
  endpoint: string;
  body?: any;
  state?: string;
  isBasicAuth?: boolean;
}
//================login api necessary interfaces=====================================

export interface LoginUserCredentialsObj {
  email: string;
  password: string;
}

//================signup api necessary interfaces=====================================

export interface SignUpUserObj {
  firstName: string;
  LastName: string;
  email: string;
  password: string;
}
