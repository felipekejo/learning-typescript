import { Request, Response } from "express";
import CreateUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = CreateUser({
    email: "diego@rocketseat.com.br",
    password: "123456",
    techs: [
      "NodeJs",
      "ReactJs",
      "React Native",
      { title: "JavaScrit", experience: 100 },
    ],
  });

  return response.json({ messa: "Hello World" });
}
