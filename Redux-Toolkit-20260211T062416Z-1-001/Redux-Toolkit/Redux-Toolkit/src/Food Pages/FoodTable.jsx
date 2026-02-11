import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteFood, viewFood } from "../Food Components/FoodSlice";
import { AiOutlineDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { HiOutlineViewfinderCircle } from 'react-icons/hi2';
import Swal from "sweetalert2";

export default function FoodTable() {
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

      <div className="container mt-5 rounded px-0 shadow-lg bg-white">


        <div className="table-responsive">
          <table className="table  table-bordered">
            <thead className="table-primary">
              <tr>
                <th>F. Category</th>
                <th>F. Image</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Delivery Address</th>
                <th>Instructions</th>
                <th>Delete | Edit | View</th>
              </tr>
            </thead>
            <tbody>
              {foodList.map((food) => (
                <tr key={food.id}>
                  <td>{food.foodCategory}</td>
                  <td>
                    <img
                      src={food.url}
                      alt={food.foodCategory}
                      className="w-25  rounded-2"
                    />
                  </td>
                  <td>₹{food.price}</td>
                  <td>{food.quantity}</td>
                  <td>{food.deliveryAddress}</td>
                  <td>{food.Instructions || "-"}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-danger fs-5"
                        onClick={() => trash(food.id)}
                      >
                        <AiOutlineDelete />
                      </button>
                      <NavLink
                        className="btn btn-warning fs-5"
                        to={`/updatefood/${food.id}`}
                      >
                        <FaEdit />
                      </NavLink>
                      <NavLink
                        className="btn btn-info fs-5"
                        to={`/viewfood/${food.id}`}
                      >
                        <HiOutlineViewfinderCircle />
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
