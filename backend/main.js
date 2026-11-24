// Entry point of the GymLog API: loads config, connects to MongoDB and starts the server.
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());

// Simple health check so we can see the server is running.
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// TODO: mount routers from ./app/routes here.

async function start() {
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is missing. Copy .env.example to .env first.');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`GymLog API running on http://localhost:${PORT}`));
  } catch (error) {
    console.error('Could not connect to MongoDB:', error.message);
    process.exit(1);
  }
}

start();
