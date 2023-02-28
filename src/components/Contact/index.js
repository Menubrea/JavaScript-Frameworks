import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import * as colors from './../../styles/Colors';

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 87.2vh;

  img {
    object-fit: cover;
    width: 100%;
  }

  h1,
  p {
    margin: 0;
  }

  p {
    margin-bottom: 0.8em;
  }

  p:not(:first-of-type) {
    color: red;
    text-align: center;
  }

  form {
    background-color: #ebebeb;
    background-image: linear-gradient(120deg, #ebebeb 0%, #ffffff 100%);
    padding: 2em;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    max-width: 600px;
  }

  input,
  textarea {
    margin: 0;
    padding: 0;
    width: calc(100% - 1em);
    border: 1px solid ${colors.accent};
    padding: 0.5em;
    border-radius: 0.3em;
  }
`;

const SubmitButton = styled.input`
  background-color: ${colors.accent};
  color: ${colors.light};
  display: block;
  cursor: pointer;
`;

// Form validation schema
const schema = yup.object({
  // Full name validation
  fullName: yup.string().min(3).max(20).required(),
  // Subject validation
  subject: yup.string().min(3).max(30).required(),
  // Email validation
  email: yup.string().email().required(),

  body: yup.string().min(3).max(280).required(),
});

function onSubmit(data) {
  console.log(data);
}

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact Us</h1>
        <p>
          {' '}
          <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
          elit. Maecenas quis consectetur urna, sodales congue ante. In ornare
          tortor nisi, quis volutpat ex pharetra id. Sed luctus rutrum nulla,
          eget rhoncus orci luctus at. In at nunc non leo feugiat aliquam et in
          enim. Nunc nec metus dignissim, tempor odio eget, congue massa. Sed
          ullamcorper, ante et egestas pulvinar, sapien felis vehicula massa, in
          convallis orci justo eget quam. Nulla ultrices enim eu convallis
          condimentum. <strong>Nunc fringilla vel nisl vitae venenatis.</strong>{' '}
          Vestibulum viverra nibh metus, quis auctor orci varius nec.
        </p>
        <div>
          <label>Full Name</label>
          <input {...register('fullName')} />
          <p>{errors.fullName?.message}</p>
        </div>

        <div>
          <label>Subject</label>
          <input {...register('subject')} />
          <p>{errors.subject?.message}</p>
        </div>
        <div>
          <label>Your Email</label>
          <input {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label>Description</label>
          <textarea rows={5} {...register('body')} />
          <p>{errors.fullName?.message}</p>
        </div>
        <div>
          <SubmitButton type="submit" />
        </div>
      </form>
    </FormContainer>
  );
}
