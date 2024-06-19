# Login Portal Readme

## Registration Page
This page allows users to create a new account by providing their email, password, and confirming the password.

### Components:
- **Input Fields**: 
  - Email
  - Password
  - Confirm Password

- **Submit Button**: 
  - Creates the account when all fields are filled correctly.

- **Links**:
  - Link to Login Page: Navigate to the login page if already registered.

### Success Message:
Upon successful registration, users will receive a message prompting them to check their email for confirmation.

---

## Login Page
Users can log in to their account using their registered email and password.

### Components:
- **Input Fields**: 
  - Email
  - Password

- **Submit Button**: 
  - Logs the user in when credentials are correct.

- **Links**:
  - Link to Registration Page: Redirects to the registration page to create a new account.
  - Link to Password Recovery Page: Redirects to the password recovery page if the user forgot their password.

---

## Password Recovery Page
Users can recover their account password by providing their registered email.

### Components:
- **Input Field**: 
  - Email

- **Submit Button**: 
  - Sends a password recovery email if the email is registered in the system.

### Success Message:
Upon successful submission, users will receive a confirmation message.

---

## Technology Stack

### 6.1 Frontend
- **Framework**: React.js
- **Language**: JavaScript
- **Styling**: CSS/SCSS

### 6.2 Backend
- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Language**: JavaScript

### 6.3 Database
- **Database**: MongoDB

### 6.4 Email Service
- **Service Provider**: nodemailer

---

## Running the Application

### Frontend:
To run the frontend, use the following command:
```
npm run dev
```

### Backend:
To run the backend, use the following command:
```
npm start
```

---
