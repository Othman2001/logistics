import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import bodyParser from 'body-parser';
import hashPassword from '../utils/helpers/hashPassword';

const prisma = new PrismaClient();
const router = Router();

export interface TypedResponseBody<T> extends Response {
  body: T;
}

export interface TypedRequestBody<T> extends Response {
  body: T;
  message: string;
}
const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post(
  '/api/register',
  jsonParser,
  async (req: Request, res: Response) => {
    console.log(req.body);

    const user = req.body.user;
    if (!user) {
      return res.status(400).send({
        message: 'Missed data',
      });
    }
    const userFind = await prisma.user.findFirst({
      where: { email: user.email },
    });
    if (userFind) {
      console.log(userFind, 'find');
      return res.status(400).send({
        message: 'User exists',
      });
    }
    const id = uuidv4();
    const token = jwt.sign(id, process.env.TOKEN_SECRET);
    const password = await hashPassword(user.password);
    console.log(password, 'ps');
    await prisma.user.create({
      data: {
        ...user,
        password,
      },
    });
    return res.status(200).send({
      message: 'User Created ',
      token,
      user: {
        ...user,
        id,
      },
    });
  }
);
export default router;
