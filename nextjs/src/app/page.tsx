const LAMBDA_URL = "https://wl23aup7d5.execute-api.ap-northeast-1.amazonaws.com";

async function getPosts() {
  const res = await fetch(`${LAMBDA_URL}/posts`, { cache: "no-store" });
  return res.json();
}

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <main>
      <h1 className="text-2xl font-bold">Lambda × Hono Posts</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}
