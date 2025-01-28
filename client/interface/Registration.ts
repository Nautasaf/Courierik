export interface RegistrationState {
  username: string
  email: string
  password: string
  confirmPassword: string
  city: string
  error: RegisterUserError | null
}
export interface LoginState {
  email: string
  password: string
}

export interface RegisterUserResponse {
  text: string
  data: {
    id: number
    email: string
    username: string
    city: string
  }
}

export interface RegisterUserError {
  message: string
}
