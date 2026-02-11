import clsx from 'clsx';
import Image from 'next/image';

export default function HorizontalInfiniteScroll() {
  const Images = [
    '/images/brands/1f1acb614ef91eb3832b69eb918f0208aa7480ca.png',
    '/images/brands/290c29b78f613ee1f9efc09d08393c964757f0bb.png',
    '/images/brands/88b3c87c55ef5753d9a78e45aef4d219c86a8843.png',
    '/images/brands/91be6524233631974c49e17393a43726e9680864.png',
    '/images/brands/afc7cbd15be18beb1d44d0845b09bf3cff953c7b.png',
  ];

  return (
    <div
      className={clsx(
        'container mx-auto flex flex-nowrap items-center overflow-hidden',
        'select-none py-5 horizontal-infinite-scroll-container group'
      )}
    >
      {[0, 1].map((_, i) => (
        <div
          key={i}
          className={clsx(
            'flex items-center justify-around min-w-full',
            'gap-4 pe-4 horizontal-infinite-scroll'
          )}
        >
          {Images.map((img, i) => (
            <Image
              src={img}
              key={i}
              height={64}
              width={200}
              alt="برند منتخب"
              className="object-contain max-h-16 min-h-16 group-hover:grayscale hover:!grayscale-0 transition-[filter]"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
