import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import User from "../models/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public execute() {
    const user = getCustomRepository(User);
  }
}

export { UsersRepository };
