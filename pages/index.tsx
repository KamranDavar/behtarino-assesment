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
import styles from "../styles/Home.module.css";

const Home: NextPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>products list</title>
        <meta name="description" content="Beheading products list" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {products.map((item: product, index: number) => (
          <p key={index}>
            {" "}
            <Link href={`/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </p>
        ))}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

export default Home;
