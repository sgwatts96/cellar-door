import Head from "next/head";
import { getAllWinesSorted } from '@/lib/api'
import MenuLayout from "@/components/MenuLayout";

const Home = () => {
  return (
    <div className="md:px-5 md:max-w-250 md:py-5 m-auto">
      <Head>
        <title>What Puskus? Our Cellar Door</title>
        <meta name="description" content="Wine cellaring is just fine" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <MenuLayout data={getAllWinesSorted()}/>
    </div>
  );
}

export default Home