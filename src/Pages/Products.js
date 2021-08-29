import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Public from "./Products/PublicProducts";
import Secret from "./Products/SecretProducts";

function Products() {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h1>This Is The Products Page</h1>
      <Link to={`${url}/PublicProducts`}>Public Products</Link>
      <Link className="link" to={`${url}/SecretProducts`}>
        Secret Products
      </Link>
      <Route path={`${path}/PublicProducts`} component={Public} />
      <Route path={`${path}/SecretProducts`} component={Secret} />
    </div>
  );
}

export default Products;
