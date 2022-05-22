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

const Home: NextPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="px-4">
      <Head>
        <title>products list</title>
        <meta name="description" content="Beheading products list" />
      </Head>
      <main>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item: product, index: number) => (
            <Link key={index} href={`/${item.id}`} className="f">
              <a className=" flex border border-slate-100 rounded-md lex flex-col items-center justify-center w-full max-w-lg mx-auto">
                <img
                  className=" rounded-md h-72 w-30 xl:h-80"
                  src={item.image}
                  alt="T-Shirt"
                />
                <div className="p-2">
                  <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                    {item.title}
                  </h4>
                  <p className="text-blue-500 test-lg "> ${item.price}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
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
