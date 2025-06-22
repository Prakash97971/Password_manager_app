## PassOP - Your Own Password Manager

PassOP is a secure and user-friendly password manager web application that helps individuals store, manage, and organize their login credentials in one place.

---

## Overview

PassOP provides a simple interface for users to save, retrieve, edit, and delete their website credentials (site URL, username, and password). It features secure storage in MongoDB and a responsive React front-end with optional password visibility toggling.

- **Secure Storage**: Credentials are stored in a MongoDB collection with unique IDs.
- **User Interface**: React-based form for adding, editing, and deleting credentials.
- **Password Visibility Toggle**: Show or hide password text on demand.

---

## What the Project Does

- Fetches all saved credentials from the backend and displays them in a table.
- Allows users to create new credentials (site, username, password) with unique IDs.
- Enables editing by pre-filling the form with existing data and updating upon save.
- Supports deleting credentials by ID from both UI and database.

---

## Who It Is For

- Anyone looking for a lightweight, self-hosted password management solution.
- Developers who want a simple example of full-stack React/Express/MongoDB integration.
- Users who need a quick way to store and organize login information securely.

---

## Why It Is Useful

- **Centralized Storage**: Keep all your credentials in one place.
- **Easy Management**: Intuitive UI for CRUD operations.
- **Self-hosted**: Control your data and run locally or deploy to your own server.
- **Open Source**: Extend or integrate into larger projects.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Lordicon animations
- **Backend:** Node.js, Express.js, body-parser, CORS
- **Database:** MongoDB (MongoClient)

---

## Installation and Setup

1. **Install backend dependencies**:

   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables** by creating a `.env` file in the `backend` folder:

   ```ini
   MONGO_URI=your_mongodb_connection_uri
   DB_NAME=your_database_name
   PORT=3000
   ```

3. **Run the backend server**:

   ```bash
   node server.js
   ```

4. **Install frontend dependencies**:

   ```bash
   cd ../frontend
   npm install
   ```

5. **Run the React development server**:

   ```bash
   npm run dev
   ```

## Usage

1. Open the app in your browser.
2. Enter the website URL, username, and password in the form.
3. Click **Save** to store the credential.
4. Use **Edit** to modify an existing credential.
5. Use **Delete** to remove a credential.
6. Toggle the eye-icon to show/hide password text.

---

## GitHub Repository

[https://github.com/Prakash97971/PassOP](https://github.com/Prakash97971/Password_manager_app)

---

## Developed By

Prakash Shaw
[GitHub Profile](https://github.com/Prakash97971)

![App Screenshot](<Password_app/assets/Screenshot 2025-06-23 005931.png>)

