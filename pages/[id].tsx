import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSingleProduct } from "../logics/services/product";
import { product, id } from "../logics/types";

const ProductDetail: NextPage = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id =
    typeof context.query.id === "number" || typeof context.query.id === "string"
      ? context.query.id
      : 0;
  const product = await getSingleProduct(id);

  return {
    props: {
      product,
    },
  };
};

export default ProductDetail;
