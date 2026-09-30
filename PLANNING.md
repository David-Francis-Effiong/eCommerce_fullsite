# E-Commerce Project Plan (MERN Stack)

## 1. Project Planning and Requirements Gathering

### Scope of the Project
A full-stack e-commerce web application allowing users to browse products, add them to a cart, and complete a checkout process. The platform will also include an admin dashboard for managing products, categories, and orders.

### Target Audience
General consumers looking for an intuitive, fast, and secure online shopping experience, as well as store administrators who need an easy-to-use interface to manage inventory and fulfill orders.

### Core Features & Requirements
*   **User Authentication:** Registration, login, JWT-based authentication, password recovery, and user profile management.
*   **Product Catalog:** Browse products, view single product details, categorize products, search by keyword, and filter/sort.
*   **Shopping Cart:** Add/remove items, adjust quantities, and calculate subtotal/taxes/total.
*   **Checkout Process:** Collect shipping address, integrate a payment gateway (e.g., Stripe or PayPal), and process the order.
*   **Order Management:** Users can view order history and status.
*   **Admin Dashboard:**
    *   Manage Products (Create, Read, Update, Delete - CRUD)
    *   Manage Categories (CRUD)
    *   View and update order statuses (Processing, Shipped, Delivered)
    *   Manage Users (View, assign admin roles)

### Initial Database Schema (MongoDB / Mongoose)
*   **User Schema:**
    *   `_id`, `name`, `email`, `password` (hashed), `role` (user/admin), `addresses` (array), `createdAt`, `updatedAt`
*   **Product Schema:**
    *   `_id`, `name`, `description`, `price`, `category` (Reference), `stockQuantity`, `images` (array of URLs), `ratings`, `createdAt`, `updatedAt`
*   **Category Schema:**
    *   `_id`, `name`, `description`, `createdAt`, `updatedAt`
*   **Order Schema:**
    *   `_id`, `user` (Reference), `orderItems` (array of {product, name, quantity, price}), `shippingAddress`, `paymentMethod`, `paymentResult` (status, transaction ID), `taxPrice`, `shippingPrice`, `totalPrice`, `isPaid`, `paidAt`, `isDelivered`, `deliveredAt`

## 2. Next Steps
Once the plan is approved, we will proceed to:
1.  **Design and Wireframing** (Defining the component tree and UI layout).
2.  **Setting Up Development Environment** (Initializing frontend and backend directories in `I:\TECH\GoMyCode\full_eCommerce_site`).
3.  **Backend Development** (Building the Express APIs and MongoDB models).
4.  **Frontend Development** (Building the React interfaces and connecting to the APIs).
