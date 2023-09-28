import styled from "@emotion/styled";

const FormElem = styled.form`
border: 1px solid var(--dark-font);
display: flex;
`;
const Input = styled.input`
    width: 100%;
`

const InputSubmit = styled.input`
    min-width: 100px;
`

function FooterForm() {
  return (
    <FormElem action="">
      <Input type="email" />
      <InputSubmit type="submit" value="Continue" />
    </FormElem>
  );
}

export default FooterForm;
