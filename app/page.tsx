// Home page, has a small component about Bailey, the hero and call to action, and then some recent blog posts.
import Hero from "@/components/homePage/Hero";
import AboutBailey from "@/components/homePage/AboutBailey";

export default function Home() {
  return (
    <main
      className={`my-5 flex h-fit flex-col md:flex-row md:items-stretch md:gap-5`}
    >
      <Hero />
      <AboutBailey />
      <div className={`:md:flex-row flex flex-col md:gap-5`}>
        {/* Blog Posts / Project Mentions / Etc will go here. This will wait until I have some content done. */}
      </div>
    </main>
  );
}
