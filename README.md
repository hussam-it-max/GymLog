# GymLog

A personal workout tracker.

## Tech stack
- **Backend:** Node.js + Express (REST API)
- **Frontend:** React + TypeScript (Vite)
- **Database:** MongoDB (Mongoose)

## Project structure
```
GymLog/
├── backend/          # REST API
│   ├── main.js       # Entry point: config, DB connection, server start
│   └── app/
│       ├── routes/   # URL → handler mapping
│       ├── models/   # Mongoose models (MongoDB data shape)
│       ├── services/ # Business logic
│       └── schemas/  # Request validation
├── frontend/         # React + TypeScript app
│   └── src/          # App.tsx, main.tsx
├── docs/             # Documentation
└── tests/            # Backend and frontend tests
```

## Getting started

### Backend
```bash
cd backend
cp .env.example .env   # then edit the values
npm install
npm run dev
```
Check: http://localhost:3000/api/health

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:5173
