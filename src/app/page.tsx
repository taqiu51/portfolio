// src/app/page.tsx
import { url } from 'inspector';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'architect web',
    description: 'website of architect  ',
    image: 'https://as2.ftcdn.net/v2/jpg/02/73/33/91/1000_F_273339155_ox3dwZguhswCUiV6s730DCbRV5beIRHx.jpg',
    url:"https://archwebresponsive.vercel.app/"
  },
  {
    id: 2,
    title: 'The hackathon resume  ',
    description: 'build your resume ',
    image: 'https://c8.alamy.com/comp/2AH7AH6/online-job-application-glyph-icon-job-search-website-online-resume-builder-cv-maker-recruitment-website-silhouette-symbol-negative-space-vector-2AH7AH6.jpg',
    url:"https://resumebuilder2255.vercel.app/"
  },
  {
    id: 3,
    title: '  blog web',
    description: 'drug addiction blog web ',
    image: 'https://static2.bigstockphoto.com/1/8/1/large1500/181317901.jpg',
    url:"https://drug-adiction.vercel.app/"
  },
];

export default function HomePage() {
  return (
    <div className="container   mx-auto px-4 py-8">
      <h2 className="text-3xl  font-bold text-center text-black capitalize mb-8">PORTFOLIO WEB</h2>
      <div className="grid  text-red-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div 
            key={blog.id}
            className="border bg-white text-center text-black rounded-lg overflow-hidden transform hover:scale-105 shadow-lg hover:shadow-xl  transition-transform duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-black font-bold">{blog.title}</h3>
              <p className="mt-2  text-y" >{blog.description}</p>
              <Link target="_blank" href={blog.url}>
                  <span className="w-full text-black ">VIEW</span>
                </Link>
          </div>
          </div>
        ))}
      </div>
      </div>
  );
}
