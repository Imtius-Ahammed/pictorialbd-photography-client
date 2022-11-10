import React from "react";


const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="mb-10 object-cover object-center hover:shadow-2xl rounded"
            alt="hero"
            src="https://img.freepik.com/free-vector/vector-hands-taking-photos_53876-18034.jpg?w=1380&t=st=1668087429~exp=1668088029~hmac=3142af81a0dd361c0d39d95a77ea0ffcec8466bcdca15f80bf39cd55f1c65e77"
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
