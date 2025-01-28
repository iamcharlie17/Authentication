import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const GoogleSignInSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/"); 
    } else {
      navigate("/login"); 
    }
  }, [location, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center p-8 bg-white shadow-lg rounded-md w-96">
        <h1 className="text-2xl font-bold text-green-500">Welcome Back!</h1>
        <p className="mt-4 text-gray-700">
          You have successfully signed in with Google. Redirecting to your
          dashboard...
        </p>
        <div className="mt-6">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-green-500" />
        </div>
      </div>
    </div>
  );
};

export default GoogleSignInSuccess;
