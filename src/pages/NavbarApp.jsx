import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar fluid className="bg-secondary p-6 shadow-lg dark:bg-dark-secondary">
      <Navbar.Brand className="w-52 pl-10">
        <img
          src="../public/images/main-favicon-32x32.png"
          className="mr-3 h-5 sm:h-7"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex w-52 justify-between pr-10 md:order-2">
        <DarkThemeToggle className="text-gray hover:text-dark-blue dark:text-late dark:hover:text-green" />
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link
            to="/"
            className="text-2xl text-gray hover:text-dark-blue dark:text-late dark:hover:text-green"
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/portfolio"
            className="text-2xl text-gray hover:text-dark-blue dark:text-late dark:hover:text-green"
          >
            Portfolio
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
