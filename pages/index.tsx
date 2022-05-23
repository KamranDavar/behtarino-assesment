import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../logics/services/product";
import { product } from "../logics/types";

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <main>
        <div className="m-6">
        <h1 className="text-xl font-semibold">Home page</h1>
          <Link href="products">
            <a className="block underline">products list</a>
          </Link>
          <Link href="products/1">
            <a className="block underline">products/1</a>
          </Link>
          <Link href="products/2">
            <a className="block underline">products/2</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
