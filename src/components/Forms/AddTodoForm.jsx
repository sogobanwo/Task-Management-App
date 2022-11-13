import React from 'react'
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


export const AddTodoForm = ({fetchTodos}) => {
  // Add todo Function
  const addTodo = async (item) => {
    const newTask = { item };
    const response = await axios.post("http://localhost:8080/add", newTask, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchTodos();
    return response;
  };

  return (
    <React.Fragment>
    <ToastContainer />
    <Formik
            initialValues={{ item: "" }}
            onSubmit={(values, { setSubmitting }) => {
              addTodo(values.item).then((response) => {
                setSubmitting(false);
                toast.success("Task Succesfully Added",{
                  position:"top-center"
                })
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
                    placeholder="Add Task . . ."
                    value={values.item}
                    onChange={handleChange}
                  />
                  {errors.item && touched.item && errors.item}
                 
                    <button
                      type="submit"
                      id="add-todo-item"
                      className="add-todo-item"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Adding" : "Add"}
                    </button>
                
                </form>
              </>
            )}
          </Formik>
          </React.Fragment>
  )
}
