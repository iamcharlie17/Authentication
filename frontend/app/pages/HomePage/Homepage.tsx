import "./style.css";

const Homepage = () => {
  const description = `
      <p>I am an experienced web developer with a strong background in website design and development. Proficient in:</p>
      <ul>
        <li><strong>HTML</strong></li>
        <li><strong>CSS</strong></li>
        <li><strong>JavaScript</strong></li>
      </ul>
      <p>Here are the steps I follow when working on a project:</p>
      <ol>
        <li>Understand the project requirements.</li>
        <li>Plan the architecture and design.</li>
        <li>Develop the application using modern technologies.</li>
        <li>Test and debug to ensure quality.</li>
        <li>Deploy and maintain the application.</li>
      </ol>
      <p>I am passionate about creating innovative and user-friendly web applications. My unique approach to problem-solving and my commitment to delivering high-quality solutions set me apart.</p>
    `;

  return (
    <section className="max-w-7xl mx-auto">
      <div className="min-h-[calc(100vh-64px-48px)] md:min-h-[calc(100vh-132px)] flex justify-center items-center">
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
