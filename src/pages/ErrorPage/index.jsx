import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h1>We're sorry, but the page you are looking for does not exist.</h1>
      <Link to="/" className="button button--solid">
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;
