import { Router } from 'express';

import creditCardRouter from './creditcard.routes';

const routes = Router();

routes.use('/creditCard', creditCardRouter);

export default routes;
