# Interview AI

An AI-assisted interview preparation app that analyzes a job description and a candidate's PDF resume or self-description. It generates a match score, interview questions, skill gaps, a preparation plan, and an ATS-friendly resume PDF.

## Requirements

- Node.js 20 or later
- MongoDB (local or Atlas)
- A Google Gemini API key

## Setup

1. In `Backend`, copy `.env.example` to `.env` and enter `MONGO_URI`, `JWT_SECRET`, and `GOOGLE_GENAI_API_KEY`.
2. In `Frontend`, optionally copy `.env.example` to `.env`. The default API URL is `http://localhost:3000`.
3. Install packages in both folders:

   ```bash
   cd Backend && npm install
   cd ../Frontend && npm install
   ```

4. In separate terminals, start the server and website:

   ```bash
   cd Backend && npm start
   cd Frontend && npm run dev
   ```

Open the URL printed by Vite (normally `http://localhost:5173`). The current upload flow supports PDF resumes up to 3 MB.

## Validation

```bash
cd Frontend
npm run lint
npm run build
```
