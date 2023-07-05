import { GetStaticProps, InferGetStaticPropsType } from "next";

const IndexPage = ({
  name,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!name) {
    name = "killua";
  }

  return <p>Hi, {name}</p>;
};

export const getStaticProps: GetStaticProps<{
  name?: string;
}> = async () => {
  return { props: { name: "killua" } };
};

export default IndexPage;
