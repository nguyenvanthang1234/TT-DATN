import { Row } from "antd";

import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(249, 78, 47);
  gap: 14px;
  flex-wrap: nowrap;
`;
export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;
export const WapperUserOutlined = styled(UserOutlined)`
  font-size: 30px;
`;
export const WrapperHeaderAccount = styled.span`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
`;
export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
`;