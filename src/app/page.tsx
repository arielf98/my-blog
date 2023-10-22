import Hero from "@/components/hero/Hero";
import NewPost from "@/components/new-post/NewPost";
import AllPost from "@/components/all-post/AllPost";
import Link from "next/link";
import AboutMe from "@/components/about-me/AboutMe";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pb-24'>
      <div>
        <Hero />
      </div>

      <div className='px-24 mt-20 grid grid-cols-3 gap-5'>
        {/* new post */}
        <div className='col-span-2'>
          <p className='text-3xl text-black mb-8 font-bold'>New Post</p>
          <NewPost />
          <NewPost />
        </div>
        {/* new post */}

        {/* all post */}
        <div>
          <div className='flex justify-between items-center'>
            <Link href='/blog'>
              <p className='text-3xl text-black mb-8 font-bold hover:text-custom-secondary'>All Post</p>
            </Link>
            <Link href='/'>
              <p className='text-purple'>View All</p>
            </Link>
          </div>
          <AllPost />
        </div>
        {/* all post */}
      </div>
      <AboutMe />
    </main>
  );
}
