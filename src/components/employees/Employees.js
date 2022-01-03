import "./employess.css";

const Employess = ({ employees }) => {
  return (
    <section id="employees-content">
      <h1>Nasi specjaliści</h1>

      {employees.map((data) => {
        return (
          <div className="employee">
            <img src={data.image} alt={data.surname} />
            <div class="employee-description">
              <h2>
                {data.name} {data.surname} {data.position}
              </h2>
              <p>{data.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Employess;
