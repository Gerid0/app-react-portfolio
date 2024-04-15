import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const Home = () => {
  return (
    <>
      <section className="bg-primary dark:bg-dark-primary">
        <div className="mx-auto grid max-w-screen-xl  px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="pb-5 text-7xl font-semibold dark:text-late">
              Jon Gouspy
            </h1>
            <p className="pb-5 text-3xl font-medium text-dark-blue dark:text-green">
              I am an innovative front-end developer who loves to build
              human-friendly interfaces.
            </p>
            <Link
              to="/portfolio"
              className="mr-3 inline-flex items-center justify-center rounded-lg bg-dark-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-dark-blue dark:bg-dark-secondary dark:hover:bg-green"
            >
              View my work
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-dark-primary px-5 py-3 text-center text-base font-medium text-dark-primary hover:border-dark-blue hover:text-dark-blue dark:border-primary dark:text-white dark:hover:border-green dark:hover:text-green"
            >
              Get in touch
            </Link>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img
              className="rounded-full"
              src="../public/images/profile_img.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary pb-20 dark:bg-dark-primary">
        <div className="lg:py-13 lg:px-42 px-8 py-6 text-center  md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
          <h2 className="mb-1 text-3xl font-semibold tracking-tight text-dark-primary dark:text-primary md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
            Recent projects
          </h2>
          <p
            className="text-lg leading-relaxed text-dark-secondary dark:text-secondary md:text-2xl md:leading-relaxed
        lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed"
          >
            Below you can see some examples of my recent work. Check out my
            complete portfolio of web design projects. Have a project you would
            like to discuss? Let's make something great together!
          </p>
        </div>
        <div className="p lg-gap-12 mx-auto ml-0 mr-0 grid grid-cols-1 gap-12 px-12 pt-2 md:grid-cols-3 md:gap-6 md:px-14 lg:px-24 xl:px-32">
          <Link to="portfolio">
            <Card
              className="mx-auto max-w-sm bg-secondary hover:scale-105 dark:bg-dark-secondary"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="../public/images/project-hero.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-dark-primary dark:text-primary">
                Hero Block Gallery
              </h5>
              <p className="font-normal text-dark-primary dark:text-primary">
                A gallery of hero block elements with split-screen layouts and
                duotone images.
              </p>
            </Card>
          </Link>
          <Link to="portfolio">
            <Card
              className="mx-auto max-w-sm bg-secondary hover:scale-105 dark:bg-dark-secondary"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="../public/images/project-fashion.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-dark-primary dark:text-primary">
                Snazzy Fashion
              </h5>
              <p className="font-normal text-dark-primary dark:text-primary">
                A web page for a fashion retailer with a background video that
                plays in a continuous loop.
              </p>
            </Card>
          </Link>
          <Link to="portfolio">
            <Card
              className="mx-auto max-w-sm bg-secondary hover:scale-105 dark:bg-dark-secondary"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="../public/images/project-smoothie.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-dark-primary dark:text-primary">
                Smooth Smoothies
              </h5>
              <p className="font-normal text-dark-primary dark:text-primary">
                A multi-column, flexbox-based page layout and hero image with a
                tinted overlay.
              </p>
            </Card>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
