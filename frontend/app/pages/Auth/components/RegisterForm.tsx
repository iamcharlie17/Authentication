import type { FormEvent } from "react";

interface RegisterFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setFullName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  loading: boolean;
  error: string;
}

const RegisterForm = ({
  handleSubmit,
  setFullName,
  setEmail,
  setPassword,
  setConfirmPassword,
  loading,
  error,
}: RegisterFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="fullName" className="block mb-1 font-semibold">
          Full Name
        </label>
        <input
          onChange={(e) => setFullName(e.currentTarget.value)}
          type="text"
          id="fullName"
          className="w-full bg-white px-2 py-1 text-black border border-gray-400 focus:border-black focus:outline-none rounded-sm"
          required
        />
      </div>

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

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          type="password"
          id="confirmPassword"
          className="w-full bg-white px-2 py-1 text-black border border-gray-400 focus:border-black focus:outline-none rounded-sm"
          required
        />
      </div>
      {error && (
        <div>
          <h1 className="text-red-500 my-1 font-semibold">{error}</h1>
        </div>
      )}
      <div>
        {loading ? (
          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded-md uppercase font-bold hover:bg-gray-800 transition-colors"
          >
            Wait...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded-md uppercase font-bold hover:bg-gray-800 transition-colors"
          >
            Register
          </button>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
