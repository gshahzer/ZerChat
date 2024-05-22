import React from "react";
import banner from "../../assets/banner.jpg";
const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mx-9 bg-slate-300 rounded-xl shadow-2xl h-[400px] ">
        <div className="w-[700px] px-12">
          <h1 className="text-4xl font-semibold ">Welcome to ZerChat</h1>
          <br />
          <h2 className="text-xl font-thin ">
            Chat Servies that never crossed your mind before
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia
            laboriosam voluptatum eveniet quisquam. Error dicta excepturi
            voluptatum eum deleniti eveniet, et ab voluptatibus qui rerum eaque
            in quisquam minus.
          </p>
        </div>
        <div className="w-[600px] px-10">
          <img src={banner} alt="" className="w-[500px] rounded-2xl" />
        </div>
      </div>

      {/* SECOND PAGE */}
      <div className="flex items-center justify-between mx-9 mt-[50px] bg-slate-300 rounded-xl shadow-2xl h-[600px] ">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium nisi, cupiditate quidem magni quaerat vero et
                eligendi quam eveniet error laboriosam doloribus ipsum non
                mollitia architecto rem debitis ab, reprehenderit a expedita
                nostrum quae, odit nemo? Ipsa eos natus eaque? Quisquam rem
                deleniti ut tempora modi assumenda fugit obcaecati. Sunt
                doloremque consequuntur fuga ex! Eveniet itaque cumque quo nam,
                neque veritatis consequatur architecto minus molestias nobis at
                vel deleniti a fugit quos alias assumenda eius accusantium vero
                totam exercitationem omnis, maiores dicta! Incidunt eveniet,
                architecto illum sint quae autem error totam dignissimos qui
                accusantium dicta modi consequuntur, facilis deserunt laborum!
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                SHAHZAR NASIR
              </h2>
              <p class="text-gray-500">Mern Stack Developer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
