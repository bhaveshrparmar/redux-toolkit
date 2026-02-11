import { NavLink, useParams } from "react-router-dom";
import {useSelector } from "react-redux";

export default function ViewFood() {
  let { foodList } = useSelector((state) => state.FoodList);
  let { id } = useParams();

  let newArr = foodList.find((food)=> {
    return food.id == id;
  })

  return (
    <>
      <div className="text-center mt-5">
        <NavLink
          className="btn btn-warning  border-0 fs-5 px-4 py-2"
          to="/ordernow"
        >
          Food Order
        </NavLink>
      </div>

      <div className="container-fluid d-flex justify-content-center gap-5 flex-wrap mt-5">
        <div className="col-md-3 mb-4 ">
          <div className="card h-100 shadow-lg">
            <img
              className="card-img-top"
              src={newArr.url}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Name : {newArr.foodCategory}</h5>
              <p className="card-text text-muted mb-2">
                Quantity : {newArr.quantity}{" "}
              </p>
              <span className="fw-bold mb-3">Price : ₹ {newArr.price}</span>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
