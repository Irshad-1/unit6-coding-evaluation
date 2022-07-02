import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const { isAuth } = useSelector((state) => state.reducer);
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:8080/movies");
      res = await res.json();
      console.log(res);
      setData(res);
    };
    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  if (!isAuth) {
    Navigate({ to: "/login" });
  }
  return (
    <div>
      <h2>Home Page</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "90%",
          margin: "auto",
        }}
      >
        {data.map((details) => {
          return (
            <div key={details.id}>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={details.poster_path}
                alt={details.original_title}
              />
              <h3>{details.original_title}</h3>
              <button
                onClick={() => {
                  handleClick(details.id);
                }}
              >
                More Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
