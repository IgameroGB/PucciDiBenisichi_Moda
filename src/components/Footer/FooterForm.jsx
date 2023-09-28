import styled from "@emotion/styled";
import "bootstrap-icons/font/bootstrap-icons.css";

const FormElem = styled.form`
  background-color: var(--white-color);
  border: 1px solid transparent;
  border-bottom: 1px solid var(--dark-font);
  display: flex;
  height: 35px;
  box-sizing: border-box;

  &:hover {
    border: 1px solid var(--dark-font);
  }
`;

const Label = styled.label`
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;

  font-size: 11px;
  letter-spacing: 0.9px;

  /* &:focus-visible{
    border: none;
  } */
`;

const InputSubmit = styled.input`
  /* min-width: 100px; */
  border: none;
  background-color: var(--white-color);
  padding: 0 12px;
  font-size: 10px;
`;

function FooterForm() {
  return (
    <FormElem action="">
      <Label htmlFor="email">
        <i className="bi bi-envelope"></i>
      </Label>
      <Input id="email" name="email" type="email" />
      <InputSubmit type="submit" value="Continue" />
    </FormElem>
  );
}

export default FooterForm;
