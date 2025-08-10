# Flower Shop E‑commerce

This repository contains the frontend for a flower shop e‑commerce platform. Built with **React** and **React Bootstrap**, the app consumes a Laravel API to display products, manage carts, handle orders, and provide a simple admin dashboard. The site includes user-facing pages for browsing and purchasing floral arrangements as well as administrative pages for managing catalog items, transactions, and website content.

## Features

### User-Facing Pages
- **Home Page** – Showcases featured products, categories, and promotional banners.
- **Catalog** – Browse products by category with filtering and search functionality.
- **Product Detail** – View detailed product descriptions, prices, and images.
- **Shopping Cart** – Add, update, and remove products.
- **Checkout** – Place orders, upload payment proof, and review purchase details.
- **Custom Order** – Submit special requests for personalised floral arrangements.
- **About Us** – Display shop description, contact information, and location.

### Admin Dashboard
- **Dashboard Home** – Overview of key statistics.
- **Catalog Management** – Add, edit, and delete product entries.
- **Category Management** – Organise and update product categories.
- **Transaction Management** – View, filter, and update order statuses.
- **Website Content** – Update banners and homepage content.

## Tech Stack
- **Frontend:** React, React Router, React Bootstrap, Axios
- **Backend API:** Laravel (separate repository)
- **State Management:** React Hooks
- **Styling:** Bootstrap, Custom CSS
- **File Uploads:** FormData API

## Project Structure
```
src/
  components/      # Reusable UI components
  pages/           # Page-level components (Home, Catalog, Checkout, etc.)
  data/            # Static or sample data for development
  App.js           # Main application component with route definitions
  index.js         # Application entry point
```

## Getting Started

### Prerequisites
- Node.js >= 18.x
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/frontendcantik.git
   ```
2. Navigate to the project directory:
   ```bash
   cd frontendcantik
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file for environment variables:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:8000/api
   ```
5. Start the development server:
   ```bash
   npm start
   ```
