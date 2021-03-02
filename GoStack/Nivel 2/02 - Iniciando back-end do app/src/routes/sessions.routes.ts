import { Router } from 'express';

import AuthUserService from '../services/authUserService'

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {

    const { email, password } = request.body;
    const authenticateUser = new AuthUserService().execute({email, password})

    return response.json({ "message": "hellowrolwd" });
  }
  catch (err) {
    return response.json({ "message": "something went wrong" })
  }

});

export default sessionsRouter;