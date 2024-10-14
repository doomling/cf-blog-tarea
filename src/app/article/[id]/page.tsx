"use client";
import { useRouter } from "next/navigation";

interface Article {
  id: string;
  title: string;
  content: string;
}

interface PageParams {
  params: { id: string };
}

// Data mock - idealmente viene de una API

const articlesData: Article[] = [
  { id: "1", title: "Primer artículo", content: "Lorem ipsum dolor sit amet." },
  {
    id: "2",
    title: "Segundo artículo",
    content: "Lorem ipsum dolor sit amet.",
  },
  { id: "3", title: "Tercer artículo", content: "Lorem ipsum dolor sit amet." },
];

export default function Article({ params }: PageParams) {
  const { id } = params;
  const article = articlesData.find((a) => a.id === id);
  const router = useRouter();

  if (!article) return <p>Artículo no encontrado</p>;

  return (
    <>
      <h1 className="text-2xl mb-2">{article.title}</h1>
      <p>{article.content}</p>
      <button
        onClick={() => router.back()}
        className="block mt-4 text-gray-500 dark:text-gray-400"
      >
        Volver
      </button>
    </>
  );
}
