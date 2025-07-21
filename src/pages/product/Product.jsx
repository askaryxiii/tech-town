import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../../features/products/api/apiSlice";

const Product = () => {
  let { documentId } = useParams();

  const { isError, error, isSuccess, isLoading, data } =
    useGetSingleProductQuery(documentId);

  return <h1>product: {documentId}</h1>;
};

export default Product;
