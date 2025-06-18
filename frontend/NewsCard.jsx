import { useState } from "react";
import axios from "axios";

function NewsCard({ article, onSave }) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const res = await axios.post("http://localhost:8000/summarize", {
      text: article.content || article.description || article.title,
    });
    setSummary(res.data.summary);
    setLoading(false);
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt="" className="my-2" />}
      <p className="text-sm text-gray-600">{article.source.name}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={handleClick} className="bg-blue-500 text-white px-3 py-1 rounded">
          Summarize
        </button>
        {onSave && (
          <button onClick={onSave} className="bg-yellow-500 text-white px-3 py-1 rounded">
            📌 Save
          </button>
        )}
      </div>
      {loading ? <p>Summarizing...</p> : summary && <p className="mt-2">{summary}</p>}
    </div>
  );
}

export default NewsCard;
