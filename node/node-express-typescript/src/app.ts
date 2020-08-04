// require npm modules
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: express.Application = express();

// register  with express
app.use(helmet());
app.use(express.json());
app.options('*', cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript!');
});

export default app;
