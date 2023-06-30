import express from 'express';
import UserModel from '../model/UserModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await UserModel.find();
  res.status(200).send({message: 'oke', users});
});

// Register user
router.post('/register', async (req, res) => {
  const {username, password} = req.body;
  const user = new UserModel({username, password});
  await user.save();
  res.status(200).send({message: 'oke', user});
});

// Login user
router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  try {
    const user = await UserModel.find({username, password});
    if (!user) {
      res.status(404).send({message: 'User not found'});
    } else {
      res.status(200).send({message: 'oke!', user});
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({message: 'Internal server error'});
  }
});

export default router;
