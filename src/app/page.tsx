// src/app/page.tsx
import Link from 'next/link';
import { books } from '@/data';

export default function HomePage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Interesting Books</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Link href={`/book/${book.id}`} key={book.id}>
            <div className="h-full transform cursor-pointer rounded-lg border bg-white p-6 shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl">
              <h2 className="mb-2 text-2xl font-semibold">{book.title}</h2>
              <p className="text-gray-500">by {book.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}