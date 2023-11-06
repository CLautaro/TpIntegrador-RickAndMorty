import style from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

const Form = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperForm}>
        <img
          src={
            "https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"
          }
          className={style.img}
          alt=""
        />
        <form className={style.form}>
          <div className={style.inputContainer}>
            <label htmlFor="email" className={style.label}>
              Email:{" "}
            </label>
            <input
              name="email"
              type="text"
              value={userData.email}
              onChange={handleChange}
            ></input>
          </div>

          {errors.e1 ? (
            <p className={style.error}>{errors.e1}</p>
          ) : errors.e2 ? (
            <p className={style.error}>{errors.e2}</p>
          ) : (
            <p className={style.error}>{errors.e3}</p>
          )}

          <div className={style.inputContainer}>
            <label htmlFor="password" className={style.label}>
              Password:{" "}
            </label>
            <input
              name="password"
              type="text"
              value={userData.password}
              onChange={handleChange}
            ></input>
          </div>
          
          {errors.p1 ? (
            <p className={style.error}>{errors.p1}</p>
          ) : (
            <p className={style.error}>{errors.p2}</p>
          )}

          <button className={style.btnForm}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
