import CardDetails from "./CardDetails";
import NavBar from "./NavBar";
import Footer from "./Footer";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import Data from "./Data";
import CardDetailsTwo from "./CardDetailsTwo";

const Home = () => {
  const data = [
    { title: "Robe", description: "description 1", img: img1 },
    { title: "Chapeau", description: "description 2", img: img2 },
    { title: "Bijoux", description: "description 3", img: img3 },
    { title: "Sac", description: "description 4", img: img4 },
    { title: "Maquillage", description: "description 5", img: img5 },
    { title: "Balade en Bateaux", description: "description 6", img: img6 },
  ];

  const printTitle = (message) => {
    alert(" this from app file" + message);
  };

 
  return (
    <div>
    <NavBar />
 
    <CardDetailsTwo />
      {data.map((item, index) => {
        return (
          <CardDetails
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            clickMe={printTitle}
          />
        );
      })}
  <Footer />
    </div>
  );
};

export default Home;
