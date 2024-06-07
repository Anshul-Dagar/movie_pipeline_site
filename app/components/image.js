import Image from "next/image";

export default function ImageCard() {
    return (
       <div className="flex justify-center">
       <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
       <Image className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow_2xl"
        src="https://image.tmdb.org/t/p/w185/mztdt3y6GBsJR69zHtszFezTCLT.jpg"
        width={100}
        height={100}
        alt="Movie Poster"
      />
       </section>
       </div>
    );
  }