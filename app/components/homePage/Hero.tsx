import Link from "next/link";
import Card from "@/app/components/card/Card";

const Hero = () => {
  return (
    <Card
      adlClasses={`flex flex-col items-center align-center mt-5 md:basis-2/4`}
    >
      <h1 className={`text-center text-3xl font-bold text-slate-200`}>
        eLearning Re-Imagined
      </h1>
      <h2 className={`my-2 text-center text-xl font-semibold text-slate-200`}>
        A new kind of LMS, focusing on the what matters most, the students.
      </h2>
      <button
        className={`ml-auto mt-auto rounded-2xl bg-slate-600/70 px-5 py-2 align-bottom text-slate-200 shadow-md shadow-cyan-400 transition-all ease-in hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-400`}
      >
        <Link href={`/acolyte`}>Learn More</Link>
      </button>
    </Card>
  );
};

export default Hero;
