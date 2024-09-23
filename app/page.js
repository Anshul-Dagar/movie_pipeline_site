'use client'

import { useEffect, useState } from "react";
import ImageCard from "./components/image";
import supabase from "../app/utils/supabase";
import Loader from "../app/components/loader"



export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() =>{
    const getData = async() =>{
      const { data , error} = await supabase.from("movies").select("poster_path").limit(1000);
      setData(data);
      setIsLoading(false);
    };
    setIsLoading(true);
    getData();
  }, []);
  
  return (
    <main className="min-h-screen flex flex-col items-center px-8 py-4">
  <h1 className="bg-[#542437] shadow-lg py-4 w-full text-center rounded-lg font-happy-monkey text-3xl md:text-3xl font-bold text-white leading-tight tracking-wide">MOVIE SAGA</h1>
  <div className={isLoading ? "flex justify-center items-center min-h-screen": "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-5"}>
      {isLoading ? <Loader /> : data.map(data =>  (
        <ImageCard key={data.poster_path} path={data.poster_path} />
      ))}
      </div>
</main>

  );
}

