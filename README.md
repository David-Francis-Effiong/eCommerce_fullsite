# Full Stack MERN E-Commerce App

A complete e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). 

## Features
- **Frontend**: Built with React (Vite), React Router v6, Redux Toolkit, and React-Bootstrap.
- **Backend**: Node.js and Express server connecting to MongoDB using Mongoose.
- **Authentication**: Custom JWT (JSON Web Token) authentication with secure HTTP headers.
- **Product Management**: View products, check stock, and see reviews/ratings.
- **Cart System**: Global state management for adding/removing items and calculating totals.

## Project Structure
- `/backend`: Contains the Node/Express server, API routes, controllers, and MongoDB models.
- `/frontend`: Contains the Vite React application, components, screens, and Redux slices.

## Prerequisites
- Node.js (v14+)
- MongoDB (Local instance or MongoDB Atlas URI)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/David-Francis-Effiong/eCommerce_fullsite.git
   cd eCommerce_fullsite
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   *Create a `.env` file in the `/backend` folder with the following variables:*
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

## Running the Application

1. **Seed the database (Optional, to get sample products and users)**
   ```bash
   cd backend
   npm run data:import
   ```

2. **Run the Backend Server**
   ```bash
   cd backend
   npm run server
   ```

3. **Run the Frontend App (in a separate terminal)**
   ```bash
   cd frontend
   npm run dev
   ```

## Available Scripts
- `npm run start` - Starts the backend server (production)
- `npm run server` - Starts the backend server with nodemon (development)
- `npm run data:import` - Seeds the database with sample products and users
- `npm run data:destroy` - Clears all data from the database

## Default Credentials for Testing
- **Admin**: `admin@example.com` / `password123`
- **User**: `john@example.com` / `password123`
