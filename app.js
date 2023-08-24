const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Webhook endpoint
app.post('/gitlab-webhook', (req, res) => {
  const eventData = req.body; // Data from GitLab

  // Process and store the eventData as needed
  console.log('Received webhook data:', eventData);

  // Send a response back to GitLab
  res.status(200).json({ message: 'Webhook received successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
