import 'dotenv/config';
import express from 'express';
import { setupExpress } from './setup/express';

const app = express();
const PORT = process.env.PORT || 3000;

setupExpress(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));