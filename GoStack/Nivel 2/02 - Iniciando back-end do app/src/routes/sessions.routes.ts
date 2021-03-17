import { Router } from 'express';

import AuthUserService from '../services/authUserService'

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {

    const { email, password } = request.body;

    const authenticateUser = new AuthUserService();

    const authUserRes = await authenticateUser.execute({email, password})

    return response.json(authUserRes);
  }
  catch (err) {
    return response.json({ error: err.message})
  }

});

export default sessionsRouter;