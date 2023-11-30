import "./App.css";
import Logo from "./assets/Logo.png";
import Developer from "./assets/developer.png";
import Shape from "./assets/shape.svg";
import ShapeLight from "./assets/shape-light.svg";
import { CiLight } from "react-icons/ci";
import Button from "./components/Button";
import { PiTelegramLogoThin } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-lightBg dark:bg-black bg  w-screen h-screen font-sans">
      <header className="h-[10%] flex justify-between mx-[10%]">
        <img src={Logo} alt="" className="" />
        <div className="flex justify-start items-baseline gap-5 p-2 dark:text-lightBg">
          <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange">
            Home
          </div>
          <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange">
            My Projects
          </div>
          <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange">
            Contact
          </div>
          <button onClick={handleThemeSwitch}>
            <CiLight />
          </button>
        </div>
      </header>
      <main className="mx-[10%] flex">
        <section className="mt-[7.5%] w-1/2 dark:text-lightBg">
          <h1 className="text-mainOrange">WEB DEVELOPER</h1>
          <h4 className="text-6xl font-semibold mt-5">
            Hello, my name is <br />
            Mohamad Ganji
          </h4>
          <p className="mt-5">
            Brief description with insights into myself, my vocational <br />{" "}
            journey, and what I engage in professionally.
          </p>{" "}
          <div className="flex gap-14">
            <Button
              title="Contact me"
              className="bg-mainOrange text-lightBg mt-5 flex justify-center items-center gap-1"
              icon={<PiTelegramLogoThin />}
            />
            <Button
              title="Download CV"
              className="bg-black dark:bg-lightBg dark:text-black text-lightBg mt-5 flex justify-center items-center gap-1"
              icon={<LuDownload />}
            />
          </div>
          <div className="flex mt-5 gap-10">
            <FaLinkedinIn />
            <FaGithub />
            <FaInstagram />
          </div>
        </section>
        <section className="mt-[7.5%] w-1/2 flex justify-end">
          <div className="">
            <div>
              <img
                className="absolute "
                src={ShapeLight}
                height={400}
                width={400}
                alt="ShapeLight"
                style={{ transform: "rotate(45deg)" }}
              />
              <img
                className="absolute "
                src={Shape}
                height={400}
                width={400}
                alt="Shape"
              />
            </div>
            <img
              className="relative"
              src={Developer}
              height={400}
              width={400}
              alt="Developer"
            />
          </div>
        </section>
        <div></div>
      </main>

      {/* <footer className="mx-[10%]">
          <p>&copy; 2023 Your Website Name. All rights reserved.</p>
        </footer> */}
    </div>
  );
}

export default App;
