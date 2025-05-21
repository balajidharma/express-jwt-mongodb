import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import authenticateJWT from './middleware/authenticateJWT.js';
import 'dotenv/config';

const port = process.env.PORT || 3000;
const app = express();

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/auth', authRoutes);

app.get('/api/protected', authenticateJWT, (req, res) => {
    res.json({ message: 'This is a protected route', userId: req.userId });
});

app.listen(port, () => {
    console.log(`JWT Authentication Example app listening on port ${port}`)
})

export default app;