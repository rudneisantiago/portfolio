import { Hero, MainNav, AboutMe } from "../components";

function Home({ sobre }) {
  return (
    <>
      <Hero />
      <MainNav />
      <AboutMe>{sobre}</AboutMe>
    </>
  );
}

export async function getStaticProps() {
  const fetchApi = await fetch(`${process.env.APP_URL}/api/about-me`, {
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

export default Home;
