const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { encrypt, decrypt } = require('./cryptoUtil');

dotenv.config();
console.log('ENCRYPTION_KEY:', process.env.ENCRYPTION_KEY); // Add this line to check the environment variable

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/encrypt', (req, res) => {
    try {
        const { text } = req.body;
        const encryptedText = encrypt(text);
        res.send({ encryptedText });
    } catch (error) {
        console.error('Encryption error:', error);
        res.status(500).send('Encryption error');
    }
});

app.post('/decrypt', (req, res) => {
    try {
        const { encryptedText } = req.body;
        const decryptedText = decrypt(encryptedText);
        res.send({ decryptedText });
    } catch (error) {
        console.error('Decryption error:', error);
        res.status(500).send('Decryption error');
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
