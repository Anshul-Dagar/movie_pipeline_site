import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Saga",
  description: "Movies Poster from TMDB API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Happy+Monkey+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Title and Description for SEO */}
        <title>Trending Movies - Explore the Latest Blockbusters</title>
        <meta name="description" content="Discover the top trending movies with posters and details on the latest blockbusters in cinema. Stay updated with what's hot in the movie world." />
        <meta name="keywords" content="trending movies, movie posters, latest blockbusters, popular movies, film releases, top movies" />
        
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Trending Movies - Explore the Latest Blockbusters" />
        <meta property="og:description" content="Check out trending movies and their posters. Stay up-to-date with the latest and most popular films." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourmoviesite.com" />
        <meta property="og:image" content="https://yourmoviesite.com/default-movie-poster.jpg" /> {/* Use a default or dynamic image */}
        <meta property="og:site_name" content="Trending Movies" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trending Movies - Latest Blockbusters" />
        <meta name="twitter:description" content="Explore trending movie posters and details of the latest film releases." />
        <meta name="twitter:image" content="https://yourmoviesite.com/default-movie-poster.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Viewport for Mobile Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
