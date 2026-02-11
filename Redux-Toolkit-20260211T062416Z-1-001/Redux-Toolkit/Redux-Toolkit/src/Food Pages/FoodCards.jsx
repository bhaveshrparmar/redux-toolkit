import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { HiOutlineViewfinderCircle } from 'react-icons/hi2';
import { useDispatch, useSelector } from "react-redux";
import { deleteFood, viewFood } from "../Food Components/FoodSlice";
import Swal from "sweetalert2";

export default function ProductList() {
  const { foodList } = useSelector((state) => state.FoodList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewFood());
  }, [dispatch]);

  function trash(id) {
    Swal.fire({
      title: "Delete This Food?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          icon: "success",
        });
        dispatch(deleteFood(id));
      } else {
        Swal.fire({
          title: "Not Deleted!",
          icon: "info",
        });
      }
    });
  }

  return (
    <>
      <div className="text-center mt-4">
        <NavLink
          className="btn btn-warning fs-5 px-4 py-2 rounded"
          to="/ordernow"
        >
          Food Order
        </NavLink>
      </div>

      <div className="container mt-4">
        <div className="row g-4 justify-content-center">
          {foodList.map((food) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={food.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={food.url}
                  alt={food.foodCategory}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-2">Name : {food.foodCategory}</h5>
                  <p className="text-dark mb-2">Quantity: {food.quantity}</p>
                  <span className="fw-bold mb-3">Price: ₹{food.price}</span>
                  <div className="mt-auto d-flex justify-content-between">
                    <button
                      className="btn btn-danger w-25 fs-5"
                      onClick={() => trash(food.id)}
                    >
                      <AiOutlineDelete />
                    </button>
                    <NavLink
                      className="btn btn-info w-25 fs-5"
                      to={`/viewfood/${food.id}`}
                    >
                      <HiOutlineViewfinderCircle />
                    </NavLink>
                    <NavLink
                      className="btn btn-warning w-25 fs-5"
                      to={`/updatefood/${food.id}`}
                    >
                      <FaEdit />
                    </NavLink>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
