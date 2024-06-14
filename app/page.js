'use client'
import Image from "next/image";
import Scrolling from "./(components)/Scrolling";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <main className="">
      <h1 className="text-[30px] font-semibold text-center">Zimo Infinit Scrolling</h1>
      <QueryClientProvider client={queryClient}> 
      <Scrolling/>

</QueryClientProvider>
    </main>
  );
}
