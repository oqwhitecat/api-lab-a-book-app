// src/app/book/[id]/page.tsx

import { books } from '../../../data'; // <--- บรรทัดที่ถูกต้อง (ลบ /src ออก)
import Image from 'next/image';
import Link from 'next/link';

export default function BookDetailPage({ params }: { params: { id: string } }) {
  // ค้นหาหนังสือจาก id ที่ได้รับมาทาง URL
  const book = books.find((b) => b.id === parseInt(params.id));

  // ถ้าไม่เจอหนังสือ ให้แสดงข้อความว่า "Book not found"
  if (!book) {
    return (
        <main className="p-8 text-center">
            <h1 className="text-2xl">Book not found.</h1>
            <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
                &larr; Back to List
            </Link>
        </main>
    );
  }

  // ถ้าเจอหนังสือ ให้แสดงรายละเอียดทั้งหมด
  return (
    <main className="p-8">
      <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
        &larr; Back to List
      </Link>
      <div className="flex flex-col md:flex-row gap-8 items-start">
         <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                width={400}
                height={600}
                className="rounded-lg shadow-md w-full object-cover"
            />
         </div>
         <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
            <h2 className="text-2xl text-gray-700 mb-4">by {book.author}</h2>
            <p className="text-lg leading-relaxed">{book.description}</p>
         </div>
      </div>
    </main>
  );
}