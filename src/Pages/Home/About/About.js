import React from "react";
import img from '..//..//../assets/my.jpg'

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={img}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Md. Imtius Ahammed
            </h1>
            <p className="mb-8 leading-relaxed">
              A passionate photographer from Bangladesh who loves to document
              weddings all over the world. Always love to take moments that can
              add value to my valuable clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
