import { useEffect, useState } from "react";
import { Hero, MainNav, AboutMe } from "../components";

function Index({ sobre }) {
  // const [sobre, setSobre] = useState();

  // const fetchSobre = async () => {
  //   const fetchApi = await fetch(`/api/about-me`);

  //   const { data } = await fetchApi.json();
  //   setSobre(data);
  // };

  // useEffect(() => {
  //   fetchSobre();
  // }, []);

  return (
    <>
      <Hero />
      <MainNav />
      <AboutMe>{sobre}</AboutMe>
    </>
  );
}

export async function getStaticProps() {
  const fetchApi = await fetch(`${process.env.API_URL}/about-me`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data: sobre } = await fetchApi.json();

  return {
    props: {
      sobre,
    },
    revalidate: 60,
  };
}

export default Index;
