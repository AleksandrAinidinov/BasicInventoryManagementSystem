# Inventory Management System (Only Create and Read)

## Developer

- **Name**: Aleksandr Ainidinov  
- **Student ID**: 8905450
- **Class**: PROG2390 - Small Business Solutions - Sec4
- **Date**: 2025-04-14
- **Assignment**: Lab 5: Review Lab for Final: Basic Inventory Management System with Neon.Tech
- **GitHub Repository**: [BasicInventoryManagementSystem](https://github.com/AleksandrAinidinov/BasicInventoryManagementSystem)

---

Basic Inventory Management System application using Next.js. This version of the system allows adding new items and viewing all the inventory items in the system.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AleksandrAinidinov/BasicInventoryManagementSystem.git
   cd basic-inventory-management-system
   ```

2. **Install dependencies**:
   Ensure you have Next.js and PG installed, then run:
   ```bash
   npm install
   npm install pg
   ```
3. **Create an .env.local**:
    Create a .env.local file in the root directory and paste in your Neon database connection string:
    DATABASE_URL=postgresql://neondb_owner:npg_VpgP90slhEfL@ep-nameless-math-a53lfiak-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require

4. **Start the server**:
   Launch the application locally:
   ```bash
   npm run dev 
   ```

---

## Usage

After starting the server, you can access the following pages:

- **Home Page**: `http://localhost:3000`  
  The main landing page of the application.
- **Add Item**: `http://localhost:3000/add`  
  Page that allows adding a new inventory item.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as permitted under this license.