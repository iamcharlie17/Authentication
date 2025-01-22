import { Link } from "react-router";
import LoginForm from "./components/LoginForm";
import { FcGoogle } from "react-icons/fc";
import { useState, type FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <section className="min-h-screen flex items-center bg-gray-50 justify-center">
      <div className="p-8 shadow-sm bg-white md:w-1/2 lg:w-1/3">
        <div>
          <div className="text-center my-8">
            <h1 className="text-2xl md:text-4xl font-semibold">Welcome back</h1>
          </div>
          <LoginForm handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>
          <div className="text-center my-6">
            <h1>
              Don't have account?{" "}
              <Link to={"/register"} className="font-bold">
                Register
              </Link>
            </h1>
          </div>
          <div className="flex justify-center">
            <button className="flex items-center gap-3 bg-white border border-gray-300 hover:border-black text-gray-700 py-1 px-6 rounded-md shadow-sm font-medium text-base transition-all duration-500 hover:py-2 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              <FcGoogle size={24} />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
