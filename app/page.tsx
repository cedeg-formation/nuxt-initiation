async function getData() {
  const res = await fetch("https://acnhapi.com/v1/villagers/1");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();
  const hello: string = "Hello";
  console.log(data);
  return (
    <>
      <h1>{hello}, Home page!</h1>
      {data.id}
    </>
  );
}
