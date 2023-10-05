/**
 * @summary Server listener for SETS Express API
 * @author LocalNewsTV, Dallascrichmond
 */
import dotenv from 'dotenv';
import app from './express';

dotenv.config();

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`[server]: Server started on port ${port}`);
});