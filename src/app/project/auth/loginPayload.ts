export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'chris0arseniou@gmail.com';
    this.password = `${new Date().getTime()}`;
  }
}
