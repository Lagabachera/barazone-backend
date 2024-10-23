const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const aiRoutes = require('./routes/aiRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/ai', aiRoutes);
app.use('/api/auth', authRoutes);

// Manejo de errores
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
