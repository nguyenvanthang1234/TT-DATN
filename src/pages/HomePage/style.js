import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  padding: 20px;
`;

export const WrapperButton = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: rgb(255, 57, 69);
    span {
      color: #fff;
    }
  }
  width: 100%;
  text-align: center;
`;
export const WrapperProduct = styled.div`
  display: flex;
  justyfy-content: center;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
