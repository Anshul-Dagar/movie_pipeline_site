import Image from "next/image";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ImageCard({path}) {
  var url = 'https://image.tmdb.org/t/p/w185'+ path
    return (
       <LazyLoadImage className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow_2xl"
        src={url}
        width={200}
        height={200}
        alt="Movie Poster"
      />
    );
  }