const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST'] }));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoute);

app.get('/', (req, res) => {
  res.json({ message: 'Puvaneshwaran Portfolio API running ✅' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
