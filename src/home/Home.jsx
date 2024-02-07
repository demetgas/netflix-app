import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return <div className="home">
    <Navbar/>
    <img
    width="100%"
            className="img1"
            src="https://www.allkpop.com/upload/2022/06/content/051737/1654465030-a2b874f2-0fa1-49d8-8e86-b690bdf98a3e.jpeg"
            alt=""
          />
  </div>;
};

export default Home;
