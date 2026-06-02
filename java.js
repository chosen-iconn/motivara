const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route to handle contact form submissions
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Simulate saving the data or sending an email
    console.log(Message received from ${name} (${email}): ${message});

    res.status(200).json({ message: 'Thank you for reaching out! I will get back to you soon.' });
});

// Error handling for unknown routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});




const nodemailer = require('nodemailer');

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use another service if needed
    auth: {
        user: 'mutavasamuel1@gmail.com', // Replace with your email
        pass: 'mutava9131', // Replace with your email password or app password
    },
});

// API route to handle contact form submissions
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Replace with your email
        subject: New message from ${name},
        text: Message: ${message}\n\nFrom: ${name} (${email}),
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Thank you for reaching out! I will get back to you soon.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
});