import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Banner } from "./components/banner/banner";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </>
  );
}
export default App;
