const RegisterForm = () => {
    return (
      <form>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1 font-semibold">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full bg-white px-2 py-1 text-black border border-gray-400 focus:border-black focus:outline-none rounded-sm"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full bg-white px-2 py-1 text-black border border-gray-400 focus:border-black focus:outline-none rounded-sm"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full bg-white px-2 py-1 text-black border border-gray-400 focus:border-black focus:outline-none rounded-sm"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1 font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="w-full bg-white px-2 py-1 text-black border border-gray-400 focus:border-black focus:outline-none rounded-sm"
          />
        </div>
  
        <div>
          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded-md uppercase font-bold hover:bg-gray-800 transition-colors"
          >
            Register
          </button>
        </div>
      </form>
    );
  };
  
  export default RegisterForm;
  