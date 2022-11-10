import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import ReviewTable from "../ReviewTable/ReviewTable";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  useTitle("MyReviews");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://pictorialbd-photography-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://pictorialbd-photography-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            const remaining = reviews.filter((ord) => ord._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div className="w-9/12  container mx-auto  py-20 ">
      {reviews.length < 1 ? (
        <h1 className="text-center text-2xl">
          No Reviews here
          <Link to="/services">
            <button className="btn ">Add Reviews</button>
          </Link>
        </h1>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Reviews</th>
                <th>Ratings</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <ReviewTable
                  key={review._id}
                  review={review}
                  handleDelete={handleDelete}
                ></ReviewTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
