'use client'

import { useEffect, useState } from "react";
import ImageCard from "./components/image";
import supabase from "../app/utils/supabase";



export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() =>{
    const getData = async() =>{
      const { data , error} = await supabase.from("movies").select("poster_path").limit(20);
      setData(data);
    };
    getData();
  }, []);
  
  return (
    <main className="bg-gradient-to-r from-blue-900 via-purple-800 to-red-600  min-h-screen flex flex-col items-center p-10">
     <h1 className="font-playfair text-3xl md:text-3xl font-bold text-white leading-tight tracking-wide">Movie Saga</h1> 
     <div className="flex justify-center">
       <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 mt-5">
     {data.map(data =>  {
        return (        
              <ImageCard key={data.poster_path} path={data.poster_path}   
              />         
        )
        })
      }
      </section>
      </div>
    </main>
  );
}

