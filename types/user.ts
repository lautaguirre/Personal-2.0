export interface Profile {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  tokens: { _id: string; token: String }[];
}
