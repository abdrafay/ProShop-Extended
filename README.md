# ProShop Extended

ProShop Extended is a full-stack e-commerce application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to browse products, add them to the cart, and complete purchases. The application also includes authentication, and an admin dashboard for managing products and orders.

## Features
- User authentication (JWT-based login/register)
- Product browsing and search functionality
- Shopping cart and checkout process
- Order tracking and payment integration
- Admin dashboard for product and order management

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/abdrafay/ProShop-Extended.git
```

### 2. Install Dependencies
Navigate to the project folder and install the dependencies:
```bash
npm install
```
Then, install dependencies for the frontend:
```bash
cd frontend && npm install
```

### 3. Configure Environment Variables
Navigate back to the root directory:
```bash
cd ..
```

Create a `.env` file in the root directory and add the following:
```
MONGO_URI = your-mongo-uri
JWT_SECRET = your-secret-key
```
Replace `your-mongo-uri` and `your-secret-key` with your actual MongoDB connection string and JWT secret key.

### 4. Start the Development Server
Run the application in development mode:
```bash
npm run dev
```
This will start both the backend and frontend servers concurrently.

### Tech Stack
<ul>
  <li><b>Frontend:</b> React.js, Redux, Bootstrap</li>
<li><b>Backend:</b> Node.js, Express.js</li> 
<li><b>Database:</b> MongoDB</li>
<li><b>Authentication:</b> JSON Web Token (JWT)</li>
</ul>
