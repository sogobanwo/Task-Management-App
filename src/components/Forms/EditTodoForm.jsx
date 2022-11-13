import React from "react";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const EditTodoForm = ({ fetchTodos, todoToUpdate, setEditMode }) => {
  const { id, item } = todoToUpdate;
  // edit todo function
  const editTodo = async (newItem) => {
    const response = await axios.post("http://localhost:8080/edit", 
    {
      id,
      item: newItem
    });

    fetchTodos();
    setEditMode(false)
    
    return response;
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Formik
        enableReinitialize
        initialValues={{ item: item }}
        onSubmit={(values, { setSubmitting }) => {
          editTodo(values.item).then((response) => {
            setSubmitting(false);
            toast.success("Task Succesfully Edited", {
              position: "top-center",
            });
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            {/* <pre>{JSON.stringify(values, 2, null)}</pre> */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="new-todo-item"
                className="new-todo-item"
                name="item"
                placeholder="Update Task . . ."
                value={values.item}
                onChange={handleChange}
              />
              {errors.item && touched.item && errors.item}

              <button
                type="submit"
                id="add-todo-item"
                className="add-todo-item "
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating" : "Update"}
              </button>
            </form>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};
