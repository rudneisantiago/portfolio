import { useEffect, useState } from "react";
import { Hero, MainNav, AboutMe } from "../components";

function Index() {
  const [sobre, setSobre] = useState();

  const fetchSobre = async () => {
    const fetchApi = await fetch(`/api/about-me`);

    const { data } = await fetchApi.json();
    setSobre(data);
  };

  useEffect(() => {
    fetchSobre();
  }, []);

  return (
    <>
      <Hero />
      <MainNav />
      <AboutMe>{sobre}</AboutMe>
    </>
  );
}

// export async function getStaticProps() {
//   const fetchApi = await fetch(`${process.env.APP_URL}/api/about-me`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const { data: sobre } = await fetchApi.json();

//   return {
//     props: {
//       sobre,
//     },
//     revalidate: 60,
//   };
// }

export default Index;
