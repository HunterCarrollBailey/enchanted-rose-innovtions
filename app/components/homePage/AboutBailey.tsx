import Card from "@/app/components/card/Card";
import Link from "next/link";
const AboutBailey = () => {
  return (
    <Card adlClasses={`mt-5 md:basis-2/4`}>
      <h1 className={`text-center text-3xl font-bold text-slate-200`}>
        About The Creator
      </h1>
      <p className="my-2 text-justify leading-relaxed text-slate-200">
        Hiya! My name{`'`}s Bailey, Acolyte started out as an idea written on a
        napkin at my kitchen table in May of 2018. Since then it has become my
        larges and most ambitious project. I specialized in being a Technical
        Problem Solver and the issue my friend faced during that first
        conversation was the spark that started it all. If you would like to
        know more about me please checkout my portfolio at{" "}
        <Link
          href={`https://hunterbailey.dev`}
          target={"_blank"}
          className={`text-cyan-400 underline`}
        >
          hunterbailey.dev
        </Link>
      </p>
    </Card>
  );
};
export default AboutBailey;
