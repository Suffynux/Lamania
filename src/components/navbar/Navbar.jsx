
import Link from "next/link";
import styles from "./navbar.module.css"
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const links = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/about",
    title: "About",
  },
  {
    id: 3,
    url: "/contact",
    title: "Contact",
  },
  {
    id: 4,
    url: "/blog",
    title: "Blog",
  },
  {
    id: 5,
    url: "portfolio",
    title: "Portfolio",
  },
];
const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.container}>

       
        <div >
          <Link href={"/"} className={styles.logo}>Lamania</Link>
        </div>
        <div className={styles.links}>
          <DarkModeToggle/>
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            );
          })}
          <button className={styles.logout} >Logout</button>
          <div>
            
          </div>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
