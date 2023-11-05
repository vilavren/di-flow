export interface IRegister {
  username: string
  email: string
  password: string
}

export interface ILogin {
  email: string
  password: string
}

export interface IProfile {
  _id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
  __v: number
  token?: string
}
