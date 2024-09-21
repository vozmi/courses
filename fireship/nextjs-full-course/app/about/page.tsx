import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'We are a social media company',
};

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company that helps people connect with each other.</p>
    </main>
  );
}
