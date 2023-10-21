import Hero from "@/components/hero/Hero";
import NewPost from "@/components/new-post/NewPost";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pb-24'>
      <div>
        <Hero />
      </div>
      <div className='px-24 mt-20 grid grid-cols-2 gap-5'>

        {/* new post */}
        <div>
          <p className='text-3xl text-black mb-8 font-bold'>New Post</p>
          <NewPost />
          <NewPost />
          <NewPost />
        </div>
        {/* new post */}
        {/* new post */}
        <div>
          <p className='text-3xl text-black mb-8 font-bold'>New Post</p>
          <NewPost />
        </div>
        {/* new post */}
      </div>
    </main>
  );
}
