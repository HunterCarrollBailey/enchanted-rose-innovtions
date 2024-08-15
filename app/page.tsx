import Card from "@/app/components/card/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`my-5`}>
      <Card adlClasses={`flex flex-col items-center align-center my-5`}>
        <h1 className={`text-center text-3xl font-bold text-slate-200`}>
          eLearning Re-Imagined
        </h1>
        <h2 className={`my-2 text-center text-xl font-semibold text-slate-200`}>
          A new kind of LMS, focusing on the what matters most, the students.
        </h2>
        <button
          className={`ml-auto mt-2 rounded-2xl bg-slate-600/70 px-5 py-2 text-slate-200 shadow-md shadow-cyan-400 transition-all ease-in hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400`}
        >
          <Link href={`/acolyte`}>Learn More</Link>
        </button>
      </Card>
      <Card>
        <h1 className={`text-center text-3xl font-bold text-slate-200`}>
          About The Creator
        </h1>
        <p className="my-2 text-justify leading-relaxed text-slate-200">
          Hiya! My name{`'`}s Bailey, Acolyte started out as an idea written on
          a napkin at my kitchen table in May of 2018. Since then it has become
          my larges and most ambitious project. I specialized in being a
          Technical Problem Solver and the issue my friend faced during that
          first conversation was the spark that started it all. If you would
          like to know more about me please checkout my portfolio at{" "}
          <Link
            href={`https://hunterbailey.dev`}
            target={"_blank"}
            className={`text-cyan-400 underline`}
          >
            hunterbailey.dev
          </Link>
        </p>
      </Card>
    </main>
  );
}
