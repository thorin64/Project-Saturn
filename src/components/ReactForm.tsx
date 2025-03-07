import styles from "./page.module.css";
import React from 'react';
import { useForm } from "react-hook-form";

const ReactForm = () => {

  const { register, handleSubmit } useForm();
  
  const onSubmit = data => {
  console.log(data)
  }

  return (
    <div className={styles.loginwrapper}>
      <form name="base-form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} type="text" placeholder="example@gmail.com" />
        <input {...register("passwd", { required: true })} type="password" placeholder="password" />
        <button type="submit"> submit </button>
      </form>
    </div>
  );
};

export default ReactForm;
