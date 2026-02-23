import Features from "./components/Features";
import Landing from "./components/Landing";
import Numbers from "./components/Numbers";
import Reviews from "./components/Reviews";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./styles/style.css"

export default function Home() {
  return (
    <div>
      <Nav />
      <Modal />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </div>
  );
}
