import Head from "next/head";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Dự án tên lửa Kestrel - kiểm soát, phóng, và theo dõi hành trình."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Portfolio - Home" />
        <meta property="og:description" content="A portfolio website" />
        <meta property="og:image" content="https://warmdev.io.vn/logo.jpg" />
        <meta property="og:url" content="https://warmdev.io.vn" />
        <meta property="og:type" content="website" />
      </Head>{" "}
      <main>
        <Hero />
        <Projects />
        <Blogs />
        <Newsletter />
      </main>
    </>
  );
}

