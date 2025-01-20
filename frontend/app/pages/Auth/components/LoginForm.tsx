import type { FormEvent } from "react";

interface LoginFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

const LoginForm = ({ handleSubmit, setEmail, setPassword }: LoginFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-semibold">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="text"
          id="email"
          className="w-full bg-white px-2 py-1 text-black border border-gray-400 focus:border-black focus:outline-none rounded-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.currentTarget.value)}
          type="password"
          id="password"
          className="w-full bg-white px-2 py-1 text-black border border-gray-400 focus:border-black focus:outline-none rounded-sm"
          required
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-black text-white px-4 py-2 rounded-md uppercase font-bold hover:bg-gray-800 transition-colors"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
