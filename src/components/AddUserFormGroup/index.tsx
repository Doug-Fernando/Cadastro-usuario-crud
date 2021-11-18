import React from 'react';
import { Form } from 'react-bootstrap';
import UFS from '../../utils/brasilUfs.json';

export type FormGroupType = {
  controlId: string;
  placeHolder?: string;
  type?: string;
  fieldName: string;
  isSelect?: boolean;
};

const AddUserFormGroup = ({
  controlId, placeHolder = '', type = 'text', fieldName, isSelect = false,
}: FormGroupType) => (
  <div>
    {!isSelect ? (
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{fieldName}</Form.Label>
        <Form.Control type={type} placeholder={placeHolder} />
      </Form.Group>
    ) : (
      <Form.Group controlId={controlId}>
        <Form.Label>{fieldName}</Form.Label>
        <Form.Select>
          <option>Selecione...</option>
          {UFS.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
        </Form.Select>
      </Form.Group>
    )}
  </div>
);

export default AddUserFormGroup;
