import axios from "axios";

export const axiosJWT = axios.create();

// Đăng nhập
export const login = async (data) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data);
  return response.data;
};

// Đăng ký người dùng mới
export const signUpUser = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data);
  return res.data;
};

// Lấy chi tiết người dùng
export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

// Làm mới token
export const refreshToken = async (refreshToken) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/refresh-token`,
    {},
    {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    }
  );
  return res.data;
};

// Đăng xuất
export const logoutUser = async () => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/log-out`);
  return res.data;
};
export const updateUser = async (id, data, access_token) => {
  const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/user/update-user/${id}`, data, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};
