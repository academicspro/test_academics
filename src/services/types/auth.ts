export interface ILoginResponse {
  suceess: boolean;
  accessToken: string;
  refreshToken: string;
  user: IUserObj;
  permissions: IUserPermission;
  errors: string;
}

export interface IUserObj {
  name: string;
  email: string;
  role: string;
}


export interface IUserPermission {
  [key: string]: IUserPermissionObj;
}

export interface IUserPermissionObj {
  access: boolean;
  permissions: IPermissionObj;
}

export interface IPermissionObj {
  create: number;
  read: number;
  update: number;
  delete: number;
  managePermissions: number;
}

export interface IGetUserProfileResponse {
  suceess: boolean;
  user: IUserObj;
  permissions: IUserPermission;
  errors: string;
}
 