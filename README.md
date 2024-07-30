# Text Encryption Application

This project is a simple text encryption and decryption application built with Node.js and Express.js. The application uses AES-256-CBC for encryption and decryption of text. The user can enter text to encrypt and also decrypt previously encrypted text.

## Features

- Encrypt text using AES-256-CBC.
- Decrypt previously encrypted text.
- Simple web interface for entering text and viewing results.

## Prerequisites

- Node.js and npm installed on your machine.
- A `.env` file with the encryption key.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Yuvaes7/text-encryption.git
```

2. Navigate to the project directory:

```bash
cd text-encryption
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your encryption key:

```plaintext
ENCRYPTION_KEY=bbd400b5bc5863a3a104f8bc47fc56316fa618c40cadbeca4cdc696934d66974
```

## Usage

1. Start the server:

```bash
npm start
```

2. Open your web browser and go to `http://localhost:3000`.

3. Use the web interface to encrypt and decrypt text.

## Project Structure

- `index.js`: The main server file that sets up the Express server and handles routes for encryption and decryption.
- `cryptoUtil.js`: Contains the functions for encrypting and decrypting text.
- `public/`: Contains the static files for the web interface.
- `.env`: Environment file containing the encryption key.
- `package.json`: Contains the project metadata and dependencies.
- `README.md`: Project documentation.

## License

This project is licensed under the MIT License.

---

This README provides a clear overview of the project, its installation, and usage instructions without including the full code of each file.
