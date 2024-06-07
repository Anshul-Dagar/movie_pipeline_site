import ImageCard from "./components/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-blue-900 via-purple-800 to-red-600  min-h-screen flex flex-col items-center p-10">
     <h1 className="font-playfair text-3xl md:text-3xl font-bold text-white leading-tight tracking-wide">Movie Saga</h1> 
     <ImageCard />
    </main>
  );
}
