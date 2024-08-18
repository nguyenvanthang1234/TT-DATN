import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
  width: 200px;
  & img {
    height: 200px;
    width: 200px;
  }
`;
export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
  font-weight: 400;
  margin-bottom: 8px;
`;
export const WrapperText = styled.div`
  font-size: 10px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
`;
export const WrapperTextPrice = styled.div`
  font-weight: 500;
  color: rgb(255, 66, 78);
  font-size: 16px;
  margin: 6px 0px 4px;
`;
export const WrapperTextDiscount = styled.span`
  font-weight: 500;
  color: rgb(255, 66, 78);
  font-size: 12px;
`;
export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;
