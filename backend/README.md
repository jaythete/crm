# Quorium CRM Backend (Express + MongoDB)

## Quickstart
1. Create `.env` from `.env.example` and set `MONGO_URI`.
2. Install:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
3. API will run on `http://localhost:5000`

## Routes
- `GET /` – healthcheck
- `GET /api/contacts` – list contacts (filter with `?q=`)
- `POST /api/contacts` – create
- `PUT /api/contacts/:id` – update
- `DELETE /api/contacts/:id` – delete
- `GET /api/properties` – list properties
- `POST /api/properties` – create property
- `GET /api/stats` – dashboard stats
