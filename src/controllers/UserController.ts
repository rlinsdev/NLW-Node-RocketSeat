import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    try {
      const usersRepository = getRepository(User);

      const userAlreadyExists = await usersRepository.findOne({
        email,
      });

      if (userAlreadyExists) {
        return res.status(400).json({
          error: 'User Already exist',
        });
      }

      const user = usersRepository.create({
        name,
        email,
      });
      const test = await usersRepository.save(user);
      return res.json(user);
    } catch (err) {
      console.error(err);
    }
  }
}

export { UserController };
