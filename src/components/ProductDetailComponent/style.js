import styled from "styled-components";
import { Col, Image, InputNumber } from "antd";

export const WrapperSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;
export const WrapperColImage = styled(Col)`
  flex-basis: unset;
  display: flex;
`;

export const WrapperProductname = styled.h1`
  flex-basis: unset;
  display: flex;
`;
export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;
export const WrapperPriceProduct = styled.span`
  background: rgb(250, 250, 250);
  border-radius: 4px;
`;
export const WrapperPriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  padding: 10px;
  margin-top: 10px;
`;
export const WrapperAddressProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsisl;
  };
    span.change-address{
    color:rgb(11,116,229)
    font-size:16px;
    line-height:24px;
    font-weight:500
    }
`;
export const WrapperQualityProduct = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 120px;
`;
export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 40px;
    border-top: none;
    border-bottom: none;
    .ant-input-number-handler-wrap {
      display: none !important;
    }
  }
`;
