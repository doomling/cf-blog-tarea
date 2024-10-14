"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Article {
  id: number;
  title: string;
  content: string;
}

// Mock Data -
const articlesData: Article[] = [
  { id: 1, title: "Primer artículo", content: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Segundo artículo", content: "Lorem ipsum dolor sit amet." },
  { id: 3, title: "Tercer artículo", content: "Lorem ipsum dolor sit amet." },
];

export default function HomePage() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (id: number) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <h2 className="text-xl mb-4">Artículos</h2>
      <ul>
        {articlesData.map((article) => (
          <li key={article.id} className="mb-2 p-4 border dark:border-gray-700">
            <Link href={`/article/${article.id}`} className="text-lg">
              {article.title}
            </Link>
            <button
              onClick={() => toggleFavorite(article.id)}
              className={`ml-4 text-sm ${
                favorites.includes(article.id)
                  ? "text-red-600 dark:text-red-400"
                  : "text-blue-600 dark:text-blue-300"
              }`}
            >
              {favorites.includes(article.id)
                ? "Quitar de favoritos"
                : "Marcar como favorito"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
