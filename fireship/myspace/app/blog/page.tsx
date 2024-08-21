import React from 'react'
import { Post } from '../api/content/route'
import Link from 'next/link'

export default async function BlogPage() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(res => res.json())

  return (
    <ul>
      {posts.map(post => (
        <li key={post.slug} style={{ marginBottom: 12, listStyle: 'none' }}>
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
