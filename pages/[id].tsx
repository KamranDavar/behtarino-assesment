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
import { BsShare } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import BeautyStars from "beauty-stars";

const ProductDetail: NextPage = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl m-6 lg:mt-36 ">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-auto w-full md:h-full md:w-72"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="p-8">
            <div className="md:flex">
              <h1 className="block mt-1 flex-auto text-3xl text-black">
                {product.title}
              </h1>
              <div className="my-2 md:mt-4">
                <BeautyStars value={3} size={12} activeColor="orange" />
              </div>
            </div>
            <div className="text-lg mb-8 ">
              <del className="text-slate-500">${product.price * 2}</del>
              <span className="font-semibold text-pink-500">
                {" "}
                ${product.price}
              </span>
            </div>
            <h2>Description</h2>
            <p className="mt-2 text-slate-500">{product.description}</p>
            <div className="flex items-baseline my-8  border-b border-slate-200"></div>
            <div className="flex content-center space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto">
                <button
                  className=" px-6 py-4 shadow-xl w-fit font-semibold rounded-md bg-gradient-to-t from-red-700 to-red-500 text-white text-lg"
                  type="submit"
                >
                  <IoMdCart className="inline text-xl" /> ADD TO CART
                </button>
              </div>
              <button
                className="self-center w-9 h-9 rounded-md text-slate-300 text-2xl"
                type="button"
                aria-label="Like"
              >
                <BsShare />
              </button>
            </div>
          </div>
        </div>
      </div>
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
