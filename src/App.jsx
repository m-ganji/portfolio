import "./App.css";
import Logo from "./assets/Logo.png";

function App() {
  return (
    <div className="bg-lightbg w-screen h-screen ">
      <footer className="h-1/5 flex justify-between">
        <img src={Logo} alt="" />
        <p>Author: Hege Refsnes</p>
        <p>
          <a href="mailto:hege@example.com">hege@example.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
