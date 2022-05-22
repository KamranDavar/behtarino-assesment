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

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl m-6">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-auto w-full object-cover md:h-full md:w-72"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {product.title}
            </a>
            <div className="text-lg mb-8 ">
              <del className="text-slate-500">${product.price * 2}</del>
              <span className="font-semibold text-pink-500"> {" "}
                ${product.price}
              </span>
            </div>
            <h2>Description</h2>
            <p className="mt-2 text-slate-500">{product.description}</p>
            <div className="flex items-baseline my-8  border-b border-slate-200"></div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto">
                <button
                  className="h-10 px-6  rounded-md bg-black text-white text-lg"
                  type="submit"
                >
                  Buy now
                </button>
              </div>
              <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
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
