import React from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import {
  layout,
  flexbox,
  border,
  typography,
  space,
  color,
} from "styled-system";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first: "hi",
      second: "hello",
      checkbox: true,
    },
  });
  const onSubmit = (data) => console.log(data);
  const checkbox = watch("checkbox");
  console.log(errors);
  console.log(watch("example")); // watch input value by passing the name of it
  console.log(watch("checkbox"));
  const rd = watch("third");
  console.log(rd === "red");

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <StyledContainer
      backgroundColor={
        rd === "red"
          ? "red"
          : rd === "blue"
          ? "blue"
          : rd === "yellow"
          ? "yellow"
          : "#363f52"
      }
      height="100vh"
      width="100vw"
    >
      <input {...register("checkbox")} type="checkbox" />
      <StyledForm
        display="flex"
        textAlign="center"
        width={1 / 2}
        alignItems="center"
        flexDirection="column"
        m="auto"
        pt="10rem"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        {checkbox && (
          <StyledInput
            width="40rem"
            height="5rem"
            placeholder="first"
            {...register("first")}
          />
        )}
        {checkbox && (
          <StyledInput
            width="40rem"
            height="5rem"
            placeholder="second"
            {...register("second", {
              required: "This is required",
              minLength: {
                value: 3,
                message: "Min length is 3",
              },
            })}
          />
        )}
        {errors.second && <span>please check lenght</span>}
        {/* include validation with required or other standard HTML validation rules */}
        {checkbox && (
          <StyledInput
            width="40rem"
            height="5rem"
            placeholder="third"
            {...register("third", { required: "This is required." })}
          />
        )}
        {/* errors will return when field validation fails  */}
        {errors.third && <span>This field is required</span>}

        <StyledInput width="10rem" type="submit" />
      </StyledForm>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")(color, layout);

const StyledInput = styled("input")(layout);

const StyledForm = styled("form")(
  layout,
  flexbox,
  border,
  typography,
  space,
  color
);

export default Form;
