import React from "react";

const Portfolio = () => {
  return (
    <div className="  text-white bg-slate-800 ">
      <header>
        <div className="hero my-10 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" flex-1">
              <img src="https://i.ibb.co/0FxzTnM/abdr-pic.png" />
            </div>

            <div className=" flex-1 ml-28">
              <h3 className="text-sm text-white bg-green-600 rounded-l-full w-28 p-3 rounded-tr-full font-semibold">
                Hello There!
              </h3>
              <h1 className="text-4xl my-2 font-bold">I'M Abdur Rahman</h1>
              <h1 className="text-2xl ">Font End Webdeveloper</h1>
              <div>
                <ul>
                  <li className="my-2">
                    {" "}
                    <span className="">Address:</span>{" "}
                    <span className="mr-2">
                      Joypurhat, Rajshahi, Dhaka, Bangladesh
                    </span>{" "}
                  </li>
                  <li className="my-2">
                    {" "}
                    <span className="">Phone:</span>{" "}
                    <span className="mr-2">+8801763378457</span>{" "}
                  </li>
                  <li className="my-2">
                    {" "}
                    <span className="">Email:</span>{" "}
                    <span className="mr-2">abdurrahmanargon7@gmail.com</span>{" "}
                  </li>
                  <li className="my-2">
                    {" "}
                    <span className="">Website:</span>{" "}
                    <span className="mr-2">https//www.website.com/</span>{" "}
                  </li>
                </ul>
              </div>

              <p className="py-6">
                I am a font end web developer. now i am training in
                programing-hero's webdevelopement chorse. Now I hope, I can
                working very easy in a job.
              </p>
              <button className=" py-2 btn bg-green-600">See About</button>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="hero my-10 mx-20 ">
          <div className="hero-content flex-col lg:flex-row ">
            <div className=" flex-1">
              <img
                src="https://i.ibb.co/Fmk5rGr/about.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>
            <div className=" flex-1">
              <h1 className="text-4xl my-5 font-bold">About Me</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-green-600">Download Resume </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="hero my-10 mx-20 ">
          <h1 className="text-4xl my-5 font-bold">My Skill</h1>
          <div className="hero-content flex-col lg:flex-row "></div>
        </div>
      </section>

      <section>
        <div className="hero my-10 mx-20 ">
          <h1 className="text-4xl my-5 font-bold">My Educational</h1>
          <div className="hero-content flex-col lg:flex-row "></div>
        </div>
      </section>

      <section>
        <div className="hero my-10 mx-20 ">
          <h1 className="text-4xl my-5 font-bold">My Project</h1>
          <div className="hero-content flex-col lg:flex-row "></div>
        </div>
      </section>

      <section>
        <div className="hero my-10 mx-20 ">
          <h1 className="text-4xl my-5 font-bold">Review </h1>
          <div className="hero-content flex-col lg:flex-row "></div>
        </div>
      </section>

      <section>
        <div className="hero my-10 mx-20 ">
          <h1 className="text-4xl my-5 font-bold">Contact Me</h1>
          <div className="hero-content flex-col lg:flex-row "></div>
        </div>
      </section> */}
    </div>
  );
};

export default Portfolio;
