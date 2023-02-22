import express from 'express';
import { attachControllers } from '@decorators/express';
import {
  CategoryController,
  ImageController,
  OrderController,
  OrderItemController,
  ShopItemController,
} from 'controller';
import { AppDataSource } from 'db';

const PORT = 4999;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('re + TypeScript Server');
});

attachControllers(app, [
  CategoryController,
  ImageController,
  OrderController,
  OrderItemController,
  ShopItemController,
]);

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error: Error) => console.log(error));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
