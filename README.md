# Inventory Control – Frontend

This repository contains the **frontend** for the Inventory Control system.  
The application provides a simple interface to manage inventory items, track stock levels, and handle low-stock alerts.

The frontend is built using **Next.js** and communicates with a REST API backend.

---

## 🚀 Live Links
- **Frontend Link:** https://insyd-frontend-wine.vercel.app/
- **Base URL:** https://insyd-backend-3gfc.onrender.com/
- **Frontend Repo (This Repo):** https://github.com/Amitesh-Mishra-AM/insyd_frontend
- **Backend Repo:** https://github.com/Amitesh-Mishra-AM/Insyd-Backend
---

## 🧱 Tech Stack

- **Framework:** Next.js (Pages Router)
- **Styling:** Tailwind CSS v4
- **State Management:** React Hooks
- **Deployment:** Vercel

---

## ✨ Features

- View all inventory items
- Add new inventory items
- Increase / decrease stock quantity
- Update low-stock threshold dynamically
- Visual low-stock status indication
- Delete inventory items

---

## 📁 Project Structure
```
inventory-frontend/
├── pages/
│ ├── index.js # Inventory dashboard
│ ├── add.js # Add item page
│ └── _app.js # Global app setup
├── components/
│ ├── InventoryTable.js
│ ├── StockControls.js
│ └── ThresholdControl.js
├── services/
│ └── api.js # API calls
├── styles/
│ └── globals.css
└── tailwind.config.js
```
---
## 🔌 Environment Variables

Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_API_URL=https://insyd-backend-3gfc.onrender.com/
```
This variable is required for connecting to the backend API.
---
## ▶️ Running Locally

```bash
npm install
npm run dev
```
App will be available at:
```
http://localhost:3000
```
---
## 🧠 Design Decisions

- Pages Router was chosen for simplicity and stability.

- Styling is intentionally minimal to focus on functionality.

- Backend communication is isolated in a single service file.

- UI is designed as an internal tool rather than a consumer product.
---
## 📌 Possible Improvements

- Authentication & role-based access

- Pagination and search

- Inventory analytics

- Bulk operations
---