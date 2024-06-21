import Link from 'next/link'
import React from 'react'
import RingImage from "@/public/images/ring.png";
import Image from 'next/image';

const HomePage = () => {
  return (
    <main className=" flex px-4">
      
      <article className="w-full h-[100vh] flex flex-col justify-end pb-10">

        <div className="mx-auto mb-8 w-full"
        style={{background: "radial-gradient(circle, rgb(225, 140, 182, 0.7) 0%, rgba(2,8,18,0) 60%, rgba(255,255,255,0) 100%)"}}
        >
          <div className="h-[70vw] w-[70vw] relative mx-auto">
            <Image src={RingImage} alt="ring" fill/>
          </div>
        </div>

        <h1 className="font-write text-white text-3xl mb-6">Chic Ring</h1>

        <h2 className="font-nunito mb-1 opacity-60 text-xs italic">
          Handcrafted ring design. Inspired by nature
        </h2>

        <p className="font-nunito mb-4 opacity-80">
          This ring resembles beauty and elegance. Suitable for any occasion, whether you wear it during the day or the night, casual or formal occasions, it will reflect your beauty.
        </p>

        <Link href="/" className="px-3 py-1 bg-[#e94697] rounded-full text-white w-[6rem] text-center">
          Buy Now
        </Link>
        

      </article>

    </main>
  )
}

export default HomePage