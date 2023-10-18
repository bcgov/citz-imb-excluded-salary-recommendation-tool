/**
 * @summary Middleware and configuration setup for SET Express API
 * @author  LocalNewsTV, Dallascrichmond
 */
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import rateLimit from 'express-rate-limit';
import * as config from './config';
import * as routers from './routes';
import * as middleware from './middleware';

const app: Application = express();

// Express middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(cors(config.cors));
app.use(rateLimit(config.rateLimitConfig));

app.disable('x-powered-by');
// Routing information
app.use(
  '/api/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerJSDoc(config.swaggerConfig),
  ),
);
app.use('/api', [
  routers.healthRouter,
  routers.inquiryRouter,
]);

// Integrate global error handler after routes to cover all ends.
app.use(middleware.globalErrorHandler);

export default app;
