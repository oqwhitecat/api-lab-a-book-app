// src/app/book/[id]/page.tsx
import { books } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === parseInt(params.id));

  if (!book) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold">Book Not Found</h1>
        <Link href="/" className="mt-4 text-blue-500 hover:underline">
          &larr; Back to Book List
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-8">
      <Link href="/" className="mb-6 inline-block text-blue-500 hover:underline">
        &larr; Back to Book List
      </Link>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full flex-shrink-0 md:w-1/3">
          <Image
            src={book.coverImage}
            alt={`Cover of ${book.title}`}
            width={400}
            height={600}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="mb-2 text-4xl font-bold">{book.title}</h1>
          <h2 className="mb-4 text-2xl text-gray-600">by {book.author}</h2>
          <p className="text-lg leading-relaxed">{book.description}</p>
        </div>
      </div>
    </main>
  );
}