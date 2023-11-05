import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Not Found!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
