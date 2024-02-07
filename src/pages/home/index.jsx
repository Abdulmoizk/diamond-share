import MainCard from "../../components/Cardmain";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './css/Style.scss';

function HomePage() {
  return (
    <div className="ccontainer">
      <Header   />
      <MainCard />
      <Footer />
    </div>
  );
}

export default HomePage;
