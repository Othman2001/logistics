import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { User } from '../utils/types/user';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
export interface TypedRequestBody<T> extends Request {
  body: T;
}

const login = async (req: TypedRequestBody<User>, res: Response) => {
  const email = req.body.email;
  console.log('ca');
  if (!email || !req.body.password) {
    return res.status(500).send({
      message: 'You must Send user id',
    });
  }
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    return res.status(404).send({
      message: 'No User Found !',
    });
  } else {
    console.log('enterd');
    console.log(user.password);
    bcrypt.compare('230', user.password, (err, data) => {
      if (data) {
        console.log(data);
        return res.status(200).json({
          message: 'Login Sucess',
          token: jwt.sign(user.email, process.env.TOKEN_SECRET),
        });
      } else {
        return res.status(404).send({
          message: 'invalid password',
        });
      }
    });
  }
};
export default login;
