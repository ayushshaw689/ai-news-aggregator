import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

const categories = ["general", "technology", "sports", "health", "entertainment", "business"];

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("general");
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    fetchNews();
    const saved = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSavedNews(saved);
  }, [category]);

  const fetchNews = async () => {
    const res = await axios.get(`http://localhost:8000/news?category=${category}`);
    setArticles(res.data.articles);
  };

  const saveNews = (article) => {
    const updated = [...savedNews, article];
    setSavedNews(updated);
    localStorage.setItem("savedNews", JSON.stringify(updated));
  };

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search news..."
        className="border p-2 rounded w-full mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded ${category === cat ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {filteredArticles.map((a, i) => (
          <NewsCard key={i} article={a} onSave={() => saveNews(a)} />
        ))}
      </div>
      <h2 className="text-2xl mt-8 mb-2">📌 Read Later</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {savedNews.map((a, i) => (
          <NewsCard key={i} article={a} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
