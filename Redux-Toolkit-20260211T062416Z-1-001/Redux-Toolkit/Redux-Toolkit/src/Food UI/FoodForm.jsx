import { useForm } from "react-hook-form";
import foodCategories from "../utils/items";
import { useDispatch, useSelector } from "react-redux";
import { createFood, updateFood } from "../Food Components/FoodSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function CreateForm() {
  const { register, handleSubmit, reset } = useForm();
  let { foodList } = useSelector((state) => state.FoodList);

  let { id } = useParams();

  let updateData = foodList.find((food) => food.id == id);

  let dispatch = useDispatch();
  let redirect = useNavigate();

  useEffect(() => {
    reset(updateData);
  }, [id]);

  function addForm(data) {
    if (id == null) {
      dispatch(createFood(data));
      reset();
      redirect("/");
      Swal.fire({
        title: "Food Ordered!",
        icon: "success",
        draggable: true,
      });
    } else {
      dispatch(updateFood(data));
      reset(data);
      redirect("/");
      Swal.fire({
        title: "Food Updated!",
        icon: "success",
        draggable: true,
      });
    }
  }

  return (
    <>
      <form
        className="container mt-5 shadow-lg p-5 w-50"
        method="post"
        onSubmit={handleSubmit(addForm)}
      >
        <h1 className="text-center text-primary mb-5 ">Food Order</h1>

        <div className="mb-4">
          <select
            {...register("foodCategory", { required: true })}
            className="form-select"
            defaultValue=""
          >
            <option value="" disabled>
              --Select Food Category--
            </option>
            {foodCategories.map((food) => (
              <option key={food} value={food}>
                {food}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <input
            type="url"
            {...register("url")}
            className="form-control"
            placeholder="Enter Food URL"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            {...register("price", { required: true, min: 1 })}
            className="form-control"
            placeholder="Enter Food Price"
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            {...register("quantity", { required: true, min: 1 })}
            className="form-control"
            placeholder="Enter Food Quantity"
          />
        </div>

        <div className="mb-4">
          <textarea
            {...register("deliveryAddress", { required: true })}
            className="form-control"
            placeholder="Enter Food Delivery Address"
            rows={3}
          ></textarea>
        </div>

        <div className="mb-4">
          <textarea
            {...register("Instructions")}
            className="form-control"
            placeholder="Any Special Instructions?"
            rows={2}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary px-4 fs-6">
          Submit
        </button>
      </form>
    </>
  );
}
