import React from "react";
import { useForm } from "react-hook-form";
import useWindowSize from "../../../hooks/useWindowSize";
import * as S from "./style";

export const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const size = useWindowSize();
  const onSubmit = (data) => console.log(data);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} className="search-bar">
      <S.Title>
        Ready to watch? Enter your email to create or restart your membership.
      </S.Title>
      <S.Wrapper>
        <S.Box>
          <S.StyledInput
            placeholder="Email address"
            type="email"
            disableUnderline={errors.mail ? true : false}
            {...register("mail", { required: "Please enter a valid email" })}
            aria-invalid={errors.mail ? "true" : "false"}
            sx={{
              "&": [
                size.width > 750 ? { fontSize: "18px" } : { fontSize: "16px" },
                errors.mail
                  ? {
                      borderBottom: "1px solid #ffa00a",
                      outline: "none",
                      height: "calc(100% - 29px)",
                    }
                  : null,
              ],
            }}
          />
          {errors.mail && <S.ErrorMessage>Email is required</S.ErrorMessage>}
        </S.Box>
        <S.Button>
          <span>Get started</span>
          <S.ArrowRight />
        </S.Button>
      </S.Wrapper>
    </S.Form>
  );
};
