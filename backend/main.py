from fastapi import FastAPI, Request
from transformers import pipeline
import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

NEWS_API_KEY = "YOUR_NEWS_API_KEY"

@app.get("/news")
def get_news(category: str = "general"):
    url = f"https://newsapi.org/v2/top-headlines?country=in&category={category}&apiKey={NEWS_API_KEY}"
    response = requests.get(url)
    articles = response.json().get("articles", [])
    return {"articles": articles}

@app.post("/summarize")
async def summarize(req: Request):
    data = await req.json()
    text = data.get("text", "")
    summary = summarizer(text, max_length=100, min_length=25, do_sample=False)
    return {"summary": summary[0]["summary_text"]}
