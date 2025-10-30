import React, { useEffect, useState } from "react";

const Meal = () => {
  const [meal, setDataMeals] = useState([]);
  const [area, setArea] = useState("Canadian");
  const [inputData, setInputData] = useState("");
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log("data = ", data.meals);
      setDataMeals(data.meals);
    };

    fetchDataFromApi();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const data = await api.json();
    console.log(data.meals);

    setDataMeals(data.meals);
  };
  return (
    <>
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <div>
              <button
                type="button"
                className="btn btn-outline-primary "
                onClick={() => setArea("Canadian")}
              >
                Canadian
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary mx-2"
                onClick={() => setArea("Indian")}
              >
                Indian
              </button>
              <button
                type="button"
                className="btn btn-outline-success mx-2"
                onClick={() => setArea("British")}
              >
                British
              </button>
              <button
                type="button"
                className="btn btn-outline-danger mx-2"
                onClick={() => setArea("Russian")}
              >
                Russia
              </button>
            </div>
            <form className="d-flex" role="search" onSubmit={submitHandler}>
              <input
                className="form-control me-2"
                type="text"
                aria-label="Search"
                placeholder="Search"
                onChange={(e) => setInputData(e.target.value)}
              />
              <button className="btn btn-outline-success">Search</button>
            </form>
          </div>
        </nav>
      </div>

      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {meal.map((data) => (
            <div className="col" key={data.idMeal}>
              <div className="card">
                <img src={data.strMealThumb} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ textTransform: "uppercase" }}
                  >
                    {data.strMeal}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Meal;
