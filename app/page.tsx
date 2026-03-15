import Features from "./components/home/Features";
import Landing from "./components/home/Landing";
import Numbers from "./components/home/Numbers";
import Reviews from "./components/home/Reviews";
import Nav from "./components/home/Nav";
import Modal from "./components/Modal";
import Footer from "./components/Footer";


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
