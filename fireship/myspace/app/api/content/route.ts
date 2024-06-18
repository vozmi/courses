import { NextResponse } from 'next/server';

export type Post = {
  title: string;
  slug: string;
  content: string;
}

const posts: Post[] = [
  {
    title: 'Hello, world!',
    slug: 'hello',
    content: 'This is a test post.',
  },
  {
    title: 'How to train your dragon',
    slug: 'dragon',
    content:
      `Ever since Ryan Howard's accident, I’ve been fascinated by the idea of training your dragon. I’ve read every book on the subject, watched every video on YouTube, and even tried my hand at breeding dragons. But I haven’t found anything that works for me. That’s why I decided to start my own training business.`,
  },
  {
    title: 'The Best Thing About a Table',
    slug: 'tables',
    content:
      `The best part about tables is that they're very versatile. You can use them for anything from storing candy to hosting a party.`,
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
