import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const Portfolio = () => {
  return (
    <>
      <div className="relative mb-12 flex h-screen items-center justify-start">
        <div className="rounded-x relative z-30 bg-opacity-50 p-5 pl-10 text-2xl text-late">
          <h1 className="pb-5 text-7xl font-semibold">Portfolio</h1>
          <p className="pb-5 text-3xl font-medium ">
            Below you can see a selection of my web design and front-end
            development projects.
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute -z-10"
          src="../public/videos/hero_video.mp4"
        ></video>
      </div>

      <section className="bg-primary pb-20 dark:bg-dark-primary">
        <div className="lg:py-13 lg:px-42 px-8 py-6 text-center  md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
          <h2 className="mb-1 text-3xl font-semibold tracking-tight text-dark-primary dark:text-primary md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
            Different projects
          </h2>
        </div>
        <div className="p lg-gap-12 mx-auto ml-0 mr-0 grid grid-cols-3 gap-12 px-12 pt-2 md:grid-cols-3 md:gap-6 md:px-14 lg:px-24 xl:px-32">
          <Link to="/portfolio">
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
          <Link to="/portfolio">
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
          <Link to="/portfolio">
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
          <Link to="/portfolio">
            <Card
              className="mx-auto max-w-sm bg-secondary hover:scale-105 dark:bg-dark-secondary"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="../public/images/store.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-dark-primary dark:text-primary">
                Online Store
              </h5>
              <p className="font-normal text-dark-primary dark:text-primary">
                An online store offering books on web design with affiliate
                links to Amazon.
              </p>
            </Card>
          </Link>
          <Link to="/portfolio">
            <Card
              className="mx-auto max-w-sm bg-secondary hover:scale-105 dark:bg-dark-secondary"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="../public/images/project-multi-col.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-dark-primary dark:text-primary">
                Multi-column Layouts
              </h5>
              <p className="font-normal text-dark-primary dark:text-primary">
                A gallery of multi-column, reponsive layouts.
              </p>
            </Card>
          </Link>
          <Link to="/portfolio">
            <Card
              className="mx-auto max-w-sm bg-secondary hover:scale-105 dark:bg-dark-secondary"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="../public/images/project-crypto-wallet.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-dark-primary dark:text-primary">
                Crypto Wallet
              </h5>
              <p className="font-normal text-dark-primary dark:text-primary">
                A dark-themed responsive single-page website for a fictitious
                crypto wallet.
              </p>
            </Card>
          </Link>
        </div>
      </section>

      <section className="bg-primary pb-20 dark:bg-dark-primary">
        <div className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
          <h2 className="mb-1 text-3xl font-semibold tracking-tight text-dark-primary dark:text-primary md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
            Different tools
          </h2>
        </div>

        <div className="lg:py-13 lg:px-42 grid grid-cols-5 grid-rows-5 gap-12 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/c.png" width="120" height="120" />
          </div>
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/csharp.png" width="120" height="120" />
          </div>
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/c++.png" width="120" height="120" />
          </div>
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/python.png" width="120" height="120" />
          </div>
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/casio.png" width="120" height="120" />
          </div>
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/ocaml.png" width="120" height="120" />
          </div>
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/rust.png" width="120" height="120" />
          </div>
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/kotlin.png" width="120" height="120" />
          </div>
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/html.png" width="120" height="120" />
          </div>
          <div className="w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/css.png" width="120" height="120" />
          </div>
          <div className="col-start-2 w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/java.png" width="120" height="120" />
          </div>
          <div className="col-start-3 row-start-3 w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img src="../public/images/react.png" width="120" height="120" />
          </div>
          <div className="col-start-4 w-36 justify-center rounded-xl border-2 border-dark-blue bg-secondary p-5 shadow-xl hover:animate-bounce dark:border-black dark:bg-dark-secondary">
            <img
              src="../public/images/javascript.png"
              width="120"
              height="120"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
