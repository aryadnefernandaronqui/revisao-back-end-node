import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { usersRoutes } from '../app/features/users/users.routes';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors());

app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
