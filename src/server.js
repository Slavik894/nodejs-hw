import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import logger from 'pino-http';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(helmet());
app.use(cors({origin:"*"}));

app.get('/notes', (req, res)=>{
    logger(req, res);
    res.status(200).json({
        "message": "Retrieved all notes"
    });
});

app.get('/notes/:noteId',(req, res)=>{ 
    logger(req, res);
    res.status(200).json({
        "message": "Retrieved note with ID: id_param"
    });
});

app.get('/test-error', () => {
  throw new Error('Simulated server error');
});


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
const isProd = process.env.NODE_ENV === "production";

  res.status(500).json({
    message: isProd
      ? "Something went wrong. Please try again later."
      : err.message,
  });
});


app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server is running on port ${PORT}`);
});