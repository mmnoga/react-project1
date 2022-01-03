import "./App.css";

import { Nav, Header, Employess, Offer, Footer } from "./components/index";

import { employeesData } from "./storage/dataEmployees";
import { offersData } from "./storage/dataOffers";

function App() {
  return (
    <div className="App wrapper">
      <Nav />
      <Header />
      <Employess employees={employeesData} />
      <Offer offers={offersData} />
      <Footer />
    </div>
  );
}

export default App;
