# 📰 AI News Aggregator Website (with AI Summarization)

An intelligent news aggregator web app built using **Vite + React** for the frontend and **FastAPI** + Hugging Face Transformers for the backend. The app fetches daily top news using NewsAPI, allows users to summarize articles using AI (LLM), filter by category, search news, and save items to a "Read Later" list.

---

## ✨ Features

- ✅ Daily news updates from [NewsAPI](https://newsapi.org)
- ✅ AI-powered summarization using `facebook/bart-large-cnn`
- ✅ Category-wise filtering (Tech, Sports, Health, etc.)
- ✅ News search bar (title-based)
- ✅ Save news to "Read Later" list using localStorage
- ✅ Fast and responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

- **Frontend**: Vite + React + Tailwind CSS
- **Backend**: FastAPI + Transformers (HuggingFace)
- **NLP Model**: `facebook/bart-large-cnn` (summarizer)
- **News Source**: [NewsAPI.org](https://newsapi.org)
- **State**: React Hooks (useState, useEffect)

---

## 🚀 Setup Instructions

### 1. Clone & Install

```bash
git clone <your-repo>
cd ai-news-aggregator
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

> ⚠️ Replace `YOUR_NEWS_API_KEY` in `main.py` with your key from [newsapi.org](https://newsapi.org).

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Demo Screenshots

> Add screenshots of UI, summary popup, and saved items here.

---

## 📌 Future Enhancements

- Auth system + cloud-based "Read Later"
- Sentiment analysis or topic clustering
- Voice narration of summaries
- Scheduled summarization with DB storage

---

## 🙌 Made with ❤️ by Ayush
