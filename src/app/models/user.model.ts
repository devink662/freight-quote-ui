// user.models.ts

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: string; // Optional field for user roles

  constructor(name: string, email: string, password: string, role?: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
