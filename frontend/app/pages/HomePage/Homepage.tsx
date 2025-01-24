import "./style.css";
const Homepage = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="min-h-[calc(100vh-64px-48px)] md:min-h-[calc(100vh-88px-48px)] flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-8">
          <button className="bg-gray-200 px-4 py-2 rounded-md shadow-lg hover:bg-gray-400 transition-colors duration-300 font-semibold">
            Public Data
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-md shadow-lg hover:bg-gray-400 transition-colors duration-300 font-semibold">
            User Data
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-md shadow-lg hover:bg-gray-400 transition-colors duration-300 font-semibold">
            Admin Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
