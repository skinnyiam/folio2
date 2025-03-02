import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.jpeg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <div className="prose prose-neutral dark:prose-invert">
        <div className="">
          <h1 className="text-3xl font-bold ">Hey, I'm Saurabh Shukla</h1>
          <p className="">
            Currently working at <span className="font-semibold">GrooveHQ</span>{" "}
            as a Software Developer. But let's rewind a bit... ⏪
          </p>
          <p className="">
            School? Average. Then came grades 10, 11, and 12, where I leveled up
            because, well, my batchmates were{" "}
            <span className="italic">loserssss</span>. 😆 Decided to become an{" "}
            <span className="font-semibold">IIIIT legend</span>, went for
            coaching, realized in four months—nope, not happening. Crashed and
            burned in JEE Mains with a glorious 64%ile. 🚀💥 Told my parents,
            "I'm coming home!" And then... boom, COVID.
          </p>
          <p className="">
            Took admission in the cheapest government college with a CS
            degree—because, let's be real,{" "}
            <span className="font-semibold">moneeeeeeyyyyyyy</span>! 💰💰 Met
            some cool folks who were crushing it in coding, got introduced, and
            became kinda good at it.
          </p>
          <p className="">
            Some of those folks started a company, and I jumped in. Built{" "}
            <span className="font-semibold">Kroto</span> as a Software
            Developer, pivoted, and my role became{" "}
            <span className="font-semibold">Founding Engineer</span>. Fast
            forward—sold Kroto to{" "}
            <span className="font-semibold">GrooveHQ</span> in Jan 2025, and
            here I am! 😎
          </p>
          <h2 className="text-2xl font-bold ">Skills & Interests</h2>
          <ul className="list-disc pl-6">
            <li>
              Full-Stack Developer (Next.js, TypeScript, Node.js, AWS(S3), will
              add dedicated page for this)
            </li>
            <li>I play acoustic guitar and like to write songs/poems.</li>
            <li>Hardcore Pink Floyd fan 🎵✨</li>
            <li>Will add some pages about my interests</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
