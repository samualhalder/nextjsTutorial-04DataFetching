type Product = {
  id: number;
  title: string;
  price: number;
  desc: string;
};
export default async function Products() {
  const response = await fetch("http://localhost:8080/products", {
    next: { revalidate: 10 },
  });
  const products = await response.json();

  return (
    <div>
      products:
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="flex flex-col w-full justify-center items-center border-2"
        >
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.desc}</p>
        </div>
      ))}
    </div>
  );
}
