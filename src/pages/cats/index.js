import Head from "next/head";

export default function Cats() {
  return (
    <div>
      <Head>
        <title>Cats</title>
      </Head>
      <main className="grid place-items-center h-screen">
        <h1 className="text-6xl">cats</h1>
      </main>
    </div>
  );
}
