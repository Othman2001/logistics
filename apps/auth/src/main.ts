// eslint-disable-next-line @typescript-eslint/no-var-requires
import express, { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import redisClient from './utils/connectRedis';
import login from './routes/login';
import dotenv from 'dotenv';
import registerUser from './routes/register';
import bodyParser from 'body-parser';

dotenv.config();
const prisma = new PrismaClient();
const app = express();
const jsonParser = bodyParser.json();

async function bootstrap() {
  // Testing
  app.get('/api/healthchecker', async (_, res: Response) => {
    const message = await redisClient.get('try');
    res.status(200).json({
      status: 'success',
      message,
    });
  });

  const port = 9000;
  app.listen(port, () => {
    console.log(`Server on port: ${port}`);
  });
}

app.post('/api/login', jsonParser, login);
app.use(registerUser);

bootstrap()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
