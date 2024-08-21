import { Post } from '@/app/api/content/route'
import React from 'react'

export const revalidate = 420

type Props = {
  params: {
    slug: string
  }
}

export const generateStaticParams = async () => {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(res => res.json())
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPostPage ({ params }: Props) {
  const posts: Post[] = await fetch(`http://localhost:3000/api/content`).then(res => res.json())
  const post = posts.find(post => post.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
