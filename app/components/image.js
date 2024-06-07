import Image from "next/image";

export default function ImageCard({path}) {
  var url = 'https://image.tmdb.org/t/p/w185'+ path
    return (
       <Image className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow_2xl"
        src={url}
        width={170}
        height={170}
        alt="Movie Poster"
      />
    );
  }