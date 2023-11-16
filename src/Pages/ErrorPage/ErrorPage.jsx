import { Helmet } from "react-helmet-async";
import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <Helmet>
                <title>Bistro Cafe | OOPS</title>
            </Helmet>
      <Link to={'/'}>
        <button className="btn btn-secondary capitalize">
          <AiOutlineRollback />
          Back to Home
        </button>
      </Link>
      <img src="/assets/404.gif" alt="" />
    </div>
  );
};

export default ErrorPage;
