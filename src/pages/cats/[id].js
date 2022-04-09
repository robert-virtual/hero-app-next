import Head from "next/head";
import { useRouter } from "next/router";

export default function Cat() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Cats</title>
      </Head>
      <main className="grid place-items-center h-screen">
        <h1 className="text-6xl">Cat {id}</h1>
      </main>
    </div>
  );
}
