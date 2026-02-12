import clsx from 'clsx';
import Image from 'next/image';

const imagesFromBackend = [
  {
    src: '/images/brand-story/b5a3952bf12ec16ef0dfb92bac90e9fa1a73d6e5.png',
    column: 0,
  },
  {
    src: '/images/brand-story/dd859fb93c1f34fa215efd72411f8cf521b61926.png',
    column: 0,
  },
  {
    src: '/images/brand-story/8e6e296bb9e7125578404459a758cbbf2e4517fb.png',
    column: 0,
  },
  {
    src: '/images/brand-story/2f6de647cd6bb6c92ceb9af7cbfb1824558489ae.png',
    column: 1,
  },
  {
    src: '/images/brand-story/9c003407313408e36896461d7ba6bf9d272215bc.png',
    column: 1,
  },
  {
    src: '/images/brand-story/0e637a06e204e4302a772801d867e5ae229a5cd6.png',
    column: 2,
  },
  {
    src: '/images/brand-story/b35d7d6f19fe3c443b49e9d1f3d485ecee90700c.png',
    column: 2,
  },
  {
    src: '/images/brand-story/be70c767e2b8219267b67e2c9b7692699023601e.png',
    column: 2,
  },
  {
    src: '/images/brand-story/c2b3450a855228169b169dcd1225e69ad7b2bd47.png',
    column: 2,
  },
  {
    src: '/images/brand-story/1ab7ebf8bfecc8e277232580aefac9098ee00096.png',
    column: 3,
  },
  {
    src: '/images/brand-story/d984b3fb45a22cb639aacbccaa72be85d57dc553.png',
    column: 3,
  },
];

// Temporary function for demo purposes only
// Used to showcase randomized image ordering
// This will be removed or replaced before production
function shuffleArray() {
  const shuffled = [...imagesFromBackend];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
const randomizedImages = shuffleArray();

export default function BrandStorySection() {
  const columns = Array.from({ length: 4 }, (_, i) =>
    randomizedImages
      .filter((img) => img.column === i)
      .sort((a, b) => a.column - b.column)
  );

  return (
    <section className="container mt-10 mx-auto flex flex-col gap-10 mb-30">
      <div className="flex items-end justify-between max-md:flex-col max-md:items-start gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-foreground/40 text-lg">نمونه کارها</span>
          <b className="text-2xl">داستان برند شما تخصص ما</b>
        </div>

        <div className="flex items-center gap-10 md:text-lg max-md:w-full justify-between max-md:font-black max-md:gap-5">
          {['مردانه', 'زنانه', 'بچه گانه', 'بیسبالی', 'فدورا'].map(
            (item, index) => (
              <b
                key={index}
                className={`${index === 1 ? 'text-foreground' : 'text-foreground/40'} cursor-pointer`}
              >
                {item}
              </b>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-md:px-5">
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-6 justify-between items-stretch md:first:flex-row lg:first:flex-col md:first:col-span-full lg:first:col-span-1 lg:first:items-center"
          >
            {col.map((img, i) => (
              <div
                key={i}
                className={clsx(
                  'relative rounded-2xl',
                  colIndex === columns.length - 1 &&
                    i === col.length - 1 &&
                    'col-span-full md:col-span-full lg:col-span-1'
                )}
              >
                <Image
                  src={img.src}
                  alt={`brand story image ${i + 1}`}
                  width={400}
                  height={400}
                  className="object-contain min-w-full grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
