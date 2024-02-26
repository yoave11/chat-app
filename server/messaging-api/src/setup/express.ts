import express, { Application } from 'express';
import routes from '../routes';

export const setupExpress = (app: Application) => {
  app.use(express.json());
  app.use('/api', routes);
};
