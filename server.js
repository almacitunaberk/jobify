import express from 'express';
import { notFoundMiddleware } from './middleware/not-found.js';
import { errorHandler } from './middleware/error-handler.js';

const app = express();

app.get('/', (req, res) => {
  throw new Error('NOLUYO YA');
});

app.use(notFoundMiddleware);
app.use(errorHandler);

app.listen(3001, () => console.log(`Server running on 3001`));
