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
        <title>Home Page</title>
        <meta name="description" content="Home page" />
      </Head>
      <section>
        <div className="m-6">
          <h1 className="font-semibold">challenge description</h1>
          <p>
            1. Create a public git repository and commit your project changes as
            you code.
          </p>
          <p>2. Create a nextjs project. project should run on port 3008.</p>
          <p>
            3. Read https://fakestoreapi.com/ product endpoints. once you are
            familiar with them proceed.
          </p>
          <p>
            4. Create dynamic route for products which will create urls such as
            "/products/1" and "/products/2"
          </p>
          <p>
            5. Get product information with
            <a
              className="underline"
              href="https://fakestoreapi.com/products/id"
            >
              https://fakestoreapi.com/products/id
            </a>
            (id should be replaced by id parameter in the url) server side.
          </p>
          <p>
            6. Implement components and styles to view product's information
            fetched in the previous step. Result should look like this design{" "}
            <br></br>
            <a
              className="underline"
              href="https://dribbble.com/shots/2404238-Nike-Product-Page"
            >
              https://dribbble.com/shots/2404238-Nike-Product-Page
            </a>.
            <br></br> (If there's something in the design that is not in
            products' attributes simply remove it) Implementing responsive is a
            bonus.
          </p>
          <p>
            7. Set page's seo title to product's title and meta description to
            product's description.
          </p>
          <p>8. Send your repository url.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
