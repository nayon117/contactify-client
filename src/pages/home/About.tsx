
const About = () => {
  return (
    <div>
      <section className="py-14 md:py-24">
        <div>
          <div className="grid grid-cols-12 justify-center text-center mb-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <h2 className="title mb-6">Our Mission</h2>
              <p className="text-xl opacity-80 mb-4">
                At Contactify, we're dedicated to simplifying your contact
                management experience. Our mission is to provide innovative
                solutions that streamline the way you organize and interact with
                your contacts.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 justify-center items-center mt-12 overflow-hidden">
            <div className="col-span-12 md:col-span-5 md:col-start-2 order-2 md:order-1">
              <div className="flex flex-col justify-center lg:pr-14">
                <h4 className="text-2xl font-bold mb-4">Our Approach</h4>
                <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                  We believe in embracing simplicity and efficiency. With
                  cutting-edge technology and user-friendly design, we ensure
                  that managing your contacts is effortless and enjoyable.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7 order-1 md:order-2 mb-6 md:mb-0 mt-6 md:mt-0">
              <div>
                <img
                  src="https://i.ibb.co/524K0HF/about.jpg"
                  alt=""
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 justify-center items-center mt-12 overflow-hidden">
            <div className="col-span-12 md:col-span-5 md:col-start-7 order-2">
              <div className="flex flex-col justify-center lg:pl-14">
                <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
                <p className="text-base leading-relaxed text-justify opacity-70 mb-0">
                  Our vision is to create a world where managing contacts is
                  seamless and intuitive. By prioritizing user experience and
                  innovation, we aim to revolutionize the way people connect and
                  communicate.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-2 order-1 mb-6 md:mb-0 mt-6 md:mt-0">
              <div>
                <img
                  src="https://i.ibb.co/PCW1qPL/about9.jpg"
                  alt=""
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
