import React from "react";

async function Layout({ children }: { children: React.ReactNode }) {
  const response = await fetch("http://localhost:8080/products");
  const products = await response.json();
  return <div>{children}</div>;
}

export default Layout;
