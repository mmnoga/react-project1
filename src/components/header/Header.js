import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="bg-alpha"></div>
      <section className="slogan">
        <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
        <h2>Nie wierz nam na słowo - sprawdź</h2>
        <a className="btn" href="#offer-content">
          oferta
        </a>
      </section>
    </header>
  );
};

export default Header;
