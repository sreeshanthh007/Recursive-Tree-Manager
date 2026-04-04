# Hierarchical Node Manager

Hierarchical Node Manager is a sophisticated and intuitive web application designed for managing recursive, tree-structured data with a premium user experience. Built with a modern tech stack, it features a glassmorphism-inspired UI and a robust, scalable backend.



## 🚀 Features

- **Recursive Tree Management**: Create, view, update, and delete nodes in a multi-level hierarchical structure.
- **Modern Glassmorphism UI**: A sleek, premium interface with smooth animations, curated color palettes, and responsive design.
- **Inline Node Interaction**: Add child nodes directly within the tree view for a seamless workflow.
- **Root Node Controls**: Specialized management for root-level entries.
- **Robust API**: Built with Express and TypeScript, featuring structured logging, rate limiting, and Zod validation.
- **State Management**: Optimized data fetching and caching using TanStack Query.
- **Real-time Feedback**: Beautiful notifications handled by Sonner and standardized loading states.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Shadcn UI
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Forms**: Formik + Yup
- **Feedback**: Sonner (Toast notifications)

### Backend
- **Runtime**: Node.js
- **Framework**: Express (TypeScript)
- **Database**: MongoDB (via Mongoose)
- **Logging**: Winston + Winston Daily Rotate File
- **Validation**: Zod
- **Security**: Express Rate Limit + CORS

## 📁 Project Structure

```text
Hierarchical Node Manager/
├── api/                     # Express Backend (Node.js + TypeScript)
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── routes/          # API endpoints
│   │   ├── services/        # Business logic
│   │   ├── models/          # Database schemas
│   │   ├── middlewares/     # Custom middleware
│   │   ├── dto/             # DTO's
│   │   ├── config/          # App & DB configuration
│   │   ├── validators/      # Request validation logic
│   │   └── server.ts        # Application entry point
│   └── package.json
└── client/                 # Vite Frontend (React + TypeScript)
    ├── src/
    │   ├── components/     # Reusable UI components
    │   ├── pages/          # Application pages (routes)
    │   ├── services/       # API calls
    │   ├── hooks/          # Custom React hooks
    │   ├── utils/          # Helper functions & constants
    │   ├── types/          # TypeScript types
    │   └── App.tsx         # Root component
    ├── index.html
    └── package.json
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sreeshanthh007/hierarchical-node-manager.git
   cd hierarchical-node-manager
   ```

2. **Backend Configuration**
   - Navigate to the `api` folder:
     ```bash
     cd api
     npm install
     ```
   - Create a `.env` file in the `api` directory and add your configuration:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```
   - Start the backend in development mode:
     ```bash
     npm run dev
     ```

3. **Frontend Configuration**
   - Navigate to the `client` folder (from the project root):
     ```bash
     cd client
     npm install
     ```
   - Start the frontend:
     ```bash
     npm run dev
     ```

## 📝 Features & UX

- **Intuitive Addition**: Clicking "Add Node" allows for instant creation of child nodes within the tree.
- **Visual Hierarchy**: Clear indentation and connecting lines to represent parent-child relationships.
- **Error Handling**: Comprehensive error tracking with Winston logs on the backend and user-friendly toast messages on the frontend.


