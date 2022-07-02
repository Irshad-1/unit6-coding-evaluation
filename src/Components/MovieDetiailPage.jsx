import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const MovieDetiailPage = () => {
  const { isAuth } = useSelector((state) => state.reducer);
  const { id } = useParams();
  const [data, setData] = React.useState({});
  console.log(id);
  React.useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`http://localhost:8080/movies/${id}`);
      res = await res.json();
      console.log(res);
      setData(res);
    };
    fetchData();
  }, [id]);

  if (!isAuth) {
    Navigate({ to: "/login" });
  }

  return (
    <div>
      <h2>MovieDetailPage</h2>
      <div style={{ width: "30%", margin: "auto" }}>
        <img
          style={{ width: "100%" }}
          src={data.poster_path}
          alt={data.title}
        />
        <h4>{data.title}</h4>
        <button>Book Tickets</button>
        <button>Show Booking Details</button>
      </div>
    </div>
  );
};
