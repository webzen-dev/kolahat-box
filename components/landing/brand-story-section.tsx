import Image from 'next/image';

export default function BrandStorySection() {
  return (
    <section className="container mx-auto min-h-screen font-sans py-10 flex flex-col gap-10 md:gap-20 md:aspect-square max-md:p-7">
      <div className="flex items-end justify-between max-md:flex-col max-md:items-start gap-6 ">
        <div className="flex flex-col gap-2 ">
          <span className="text-foreground/40 text-lg">نمونه کارها</span>
          <b className="text-2xl">داستان برند شما تخصص ما</b>
        </div>
        <div className="flex items-center gap-10 md:text-lg max-md:w-full justify-between max-md:font-black max-md:gap-5">
          <b className="text-foreground/40 cursor-pointer">مردانه</b>
          <b className="text-foreground cursor-pointer">زنانه</b>
          <b className="text-foreground/40 cursor-pointer">بچه گانه</b>
          <b className="text-foreground/40 cursor-pointer">بیسبالی</b>
          <b className="text-foreground/40 cursor-pointer">فدورا</b>
        </div>
      </div>

      <div className="grid grid-cols-8 grid-rows-9 gap-6 w-full flex-1">
        <div className="relative bg-foreground/10 col-span-2 row-span-4 col-start-7 row-start-1 rounded-2xl">
          <Image
            src={
              '/images/brand-story/1ab7ebf8bfecc8e277232580aefac9098ee00096.png'
            }
            alt="brand story section image"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-5 col-start-7 row-start-5 rounded-2xl">
          <Image
            src={
              '/images/brand-story/d984b3fb45a22cb639aacbccaa72be85d57dc553.png'
            }
            alt="brand story section image"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-3 col-start-5 row-start-1 rounded-2xl">
          <Image
            src={
              '/images/brand-story/0e637a06e204e4302a772801d867e5ae229a5cd6.png'
            }
            alt="brand story section image"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-2 col-start-5 row-start-4 rounded-2xl">
          <Image
            src={
              '/images/brand-story/c2b3450a855228169b169dcd1225e69ad7b2bd47.png'
            }
            alt="brand story section image"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-2 col-start-5 row-start-6 rounded-2xl">
          <Image
            src={
              '/images/brand-story/be70c767e2b8219267b67e2c9b7692699023601e.png'
            }
            alt="brand story section image"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-2 col-start-5 row-start-8 rounded-2xl">
          <Image
            src={
              '/images/brand-story/b35d7d6f19fe3c443b49e9d1f3d485ecee90700c.png'
            }
            alt="brand story section image"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-5 col-start-3 row-start-1 rounded-2xl">
          <Image
            src={
              '/images/brand-story/2f6de647cd6bb6c92ceb9af7cbfb1824558489ae.png'
            }
            alt="brand story section image"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-4 col-start-3 row-start-6 rounded-2xl">
          <Image
            src={
              '/images/brand-story/9c003407313408e36896461d7ba6bf9d272215bc.png'
            }
            alt="brand story section image"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-3 col-start-1 row-start-1 rounded-2xl">
          <Image
            src={
              '/images/brand-story/b5a3952bf12ec16ef0dfb92bac90e9fa1a73d6e5.png'
            }
            alt="brand story section image"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-3 col-start-1 row-start-4 rounded-2xl">
          <Image
            src={
              '/images/brand-story/dd859fb93c1f34fa215efd72411f8cf521b61926.png'
            }
            alt="brand story section image"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
          />
        </div>

        <div className="relative bg-foreground/10 col-span-2 row-span-3 col-start-1 row-start-7 rounded-2xl">
          <Image
            src={
              '/images/brand-story/8e6e296bb9e7125578404459a758cbbf2e4517fb.png'
            }
            alt="brand story section image"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
