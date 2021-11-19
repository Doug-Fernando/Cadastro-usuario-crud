import React from 'react';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';

const AddUserFormGroup = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...field} {...props} isInvalid={!!meta.error && meta.touched} />
      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default AddUserFormGroup;
