import { useState } from "react";
import "./style.css";
import useAxiosPublic from "~/hooks/useAxiosPublic";
import useAxiosPrivate from "~/hooks/useAxiosPrivate";

interface ApiResponse {
  data: string;
}

const Homepage = () => {
  const axiosPublic = useAxiosPublic();
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState<ApiResponse | null>(null);
  return (
    <section className="max-w-7xl">
      <div className="min-h-[calc(100vh-64px-48px)] md:min-h-[calc(100vh-88px-48px)]">
        <div className="flex justify-center mt-8">
          <div className="flex flex-col md:flex-row gap-8 ">
            <button
              onClick={async () => {
                const response = await axiosPublic("api/data/public_data");
                setData(response?.data);
              }}
              className="bg-gray-200 px-4 py-2 rounded-md shadow-lg hover:bg-gray-400 transition-colors duration-300 font-semibold"
            >
              Public Data
            </button>
            <button
              onClick={async () => {
                const response = await axiosPrivate("api/data/user_data");
                setData(response?.data);
              }}
              className="bg-gray-200 px-4 py-2 rounded-md shadow-lg hover:bg-gray-400 transition-colors duration-300 font-semibold"
            >
              User Data
            </button>
            <button
              onClick={async () => {
                const response = await axiosPrivate("api/data/admin_data");
                setData(response?.data);
              }}
              className="bg-gray-200 px-4 py-2 rounded-md shadow-lg hover:bg-gray-400 transition-colors duration-300 font-semibold"
            >
              Admin Data
            </button>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-1/2 border border-gray-200 rounded-md bg-gray-50 p-8 text-center">
            {data ? data?.data : "Demo Data"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
