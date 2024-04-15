import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const FooterApp = () => {
  return (
    <Footer>
      <div className="w-full bg-secondary p-6 text-center text-dark-primary dark:bg-dark-secondary dark:text-primary">
        <div className="mt-4 flex space-x-6 p-4 sm:mt-0 sm:justify-center">
          <Link className="hover:text-dark-blue dark:hover:text-green" to="/">
            Home
          </Link>
          <Link
            className="hover:text-dark-blue dark:hover:text-green"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-dark-blue dark:hover:text-green"
            to="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            className="hover:text-dark-blue dark:hover:text-green"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            className="hover:text-dark-blue dark:hover:text-green"
            href="https://www.instagram.com/jon.gsp?igsh=MWV6NzM4NnMyOGxrMQ=="
            icon={BsInstagram}
          />
          <Footer.Icon
            className="hover:text-dark-blue dark:hover:text-green"
            href="https://www.linkedin.com/in/jon-gouspy-a51b20218"
            icon={BsLinkedin}
          />
          <Footer.Icon
            className="hover:text-dark-blue dark:hover:text-green"
            href="https://github.com/JonGouspy"
            icon={BsGithub}
          />
        </div>
        <Footer.Copyright className="p-6" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterApp;
