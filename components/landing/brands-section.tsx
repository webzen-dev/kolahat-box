'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

function MarqueeItem({ images }: { images: string[] }) {
  return (
    <div className="flex my-24">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0"
      >
        {images.map((image: any, index: number) => {
          return (
            <Image
              width={200}
              height={200}
              alt={`marqueImg${index}`}
              className="object-contain pr-20"
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default function BrandsSection() {
  const BrandsImages = [
    '/images/brands/1f1acb614ef91eb3832b69eb918f0208aa7480ca.png',
    '/images/brands/290c29b78f613ee1f9efc09d08393c964757f0bb.png',
    '/images/brands/88b3c87c55ef5753d9a78e45aef4d219c86a8843.png',
    '/images/brands/91be6524233631974c49e17393a43726e9680864.png',
    '/images/brands/afc7cbd15be18beb1d44d0845b09bf3cff953c7b.png',
  ];
  return (
    <div className="container mx-auto overflow-hidden select-none">
      <MarqueeItem images={BrandsImages} />
    </div>
  );
}
