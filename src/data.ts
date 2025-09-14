// src/data.ts

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    description: 'A classic book about software engineering and craftsmanship.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099.jpg'
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description: 'A Handbook of Agile Software Craftsmanship.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607l/3735293.jpg'
  },
  {
    id: 3,
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    description: 'The Big Ideas Behind Reliable, Scalable, and Maintainable Systems.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1491741857l/23463279.jpg'
  }
];