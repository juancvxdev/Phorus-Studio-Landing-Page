

const testimonials = [
  {
    id: 1,
    name: 'Full Name',
    position: 'Position',
    company: 'Company Name',
    imgSrc: 'https://dummyimage.com/100x100/d4d4d4/171717',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
  },
  {
    id: 2,
    name: 'Full Name',
    position: 'Position',
    company: 'Company Name',
    imgSrc: 'https://dummyimage.com/100x100/d4d4d4/171717',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
  },
  {
    id: 3,
    name: 'Full Name',
    position: 'Position',
    company: 'Company Name',
    imgSrc: 'https://dummyimage.com/100x100/d4d4d4/171717',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
  },
];

export default function Testimonial() {
  return (
    <div className=" px-4  sm:px-6  lg:px-8 lg:h-screen w-full bg-blue-velt-50" >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="py-20 text-4xl font-semibold leading-tight tracking-wide text-blue-950 dark:text-neutral-50 xl:text-5xl">
          Customer Testimonials
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-blue-950 dark:text-neutral-400">
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
          nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
        </p>
      </div>

        <dlv className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col rounded-xl border border-blue-950 px-4 py-8 shadow-md dark:border-neutral-800 lg:px-6 lg:py-10"
            >
              <div className="x-space-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5 fill-blue-950 dark:fill-neutral-100"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-base font-semibold leading-relaxed text-blue-950 dark:text-neutral-200">
                 <p>“{testimonial.content}”</p>
              </blockquote>

              <figcaption className="mt-6 flex items-center">
                <div className="mr-4 flex-shrink-0 self-center">
                  <img
                    width={48}
                    height={48}
                    className="mx-auto h-12 w-12 rounded-full"
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-blue-950 dark:text-neutral-200">
                    {testimonial.name}
                  </h4>
                  <p className="mt-1 flex items-center space-x-2 text-sm font-medium text-blue-velt-950 dark:text-neutral-400">
                    <span>{testimonial.position}</span>{' '}
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-blue-velt-600 dark:fill-neutral-400"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <span>{testimonial.company}</span>
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </dlv>
      
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}