import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs'

import User from '../models/User'

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User
}

class AuthUserService {
  public async execute({ email, password }: Request): Promise<Response> {

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } })

    if (!user) {
      throw new Error('Email ou senha incorreta')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new Error('Email ou senha incorreta')
    }

    return {
      user
    }
  }
}

export default AuthUserService