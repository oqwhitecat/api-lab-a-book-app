// src/app/page.tsx

import Link from 'next/link';
import { books } from '@/data';

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Interesting Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link href={`/book/${book.id}`} key={book.id}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-600">by {book.author}</p>
            </div>
          </Link> // <--- แก้เป็นแบบนี้
        ))}
      </div>
    </main>
  );
}