import Features from "./components/Features";
import Landing from "./components/Landing";
import Numbers from "./components/Numbers";
import Reviews from "./components/Reviews";
import "./styles/style.css"

export default function Home() {
  return (
    <div>
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
    </div>
  );
}
