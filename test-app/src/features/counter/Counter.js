import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
  decrementAsync,
} from "./counterSlice";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { layout, flexbox, space, color } from "styled-system";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const amount = Number(watch("num"));
  const valid = amount && typeof amount === "number";

  return (
    <div>
      <StyleConuter
        display="flex"
        flexDirection="column"
        alignItems="center"
        m="auto"
        bg="gray"
        height="100vh"
        width="100vw"
        justifyContent="center"
      >
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <StyleForm
          display="flex"
          flexDirection="column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input {...register("num", { required: true })}></input>
          <input
            type="submit"
            value="만큼 increment"
            onClick={() => (valid ? dispatch(incrementByAmount(amount)) : null)}
          ></input>
          <input
            type="submit"
            value="만큼 decrement"
            onClick={() => (valid ? dispatch(decrementByAmount(amount)) : null)}
          ></input>
          <input
            type="submit"
            value="만큼 1초 뒤 increment"
            onClick={() => (valid ? incrementAsync(amount)(dispatch) : null)}
          ></input>
          <input
            type="submit"
            value="만큼 1초 뒤 decremnet"
            onClick={() => (valid ? decrementAsync(amount)(dispatch) : null)}
          ></input>
        </StyleForm>
      </StyleConuter>
    </div>
  );
};

const StyleConuter = styled.div`
  ${layout}
  ${flexbox}
  ${space}
  ${color}
`;

const StyleForm = styled.form`
  ${layout}
  ${flexbox}
`;

export default Counter;
