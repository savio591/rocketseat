import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
    const user = createUser( {
        name: "Savior",
        email: "savio591@hotmail.com",
        password: "shoppng591",
        techs: [ 'Nodejs', `React`, `React Native`, { title: "Noudiis", experience: 100}]
    })
  return response.json({ message: "Hello World!" });
}
