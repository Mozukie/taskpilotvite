import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/taskpilot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Sample route
app.get('/', (req, res) => {
  res.send('TaskPilot Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
