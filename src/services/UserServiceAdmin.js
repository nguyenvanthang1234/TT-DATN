import { axiosJWT } from "./UserService";

// Xóa người dùng
export const deleteUser = async (id, access_token, data) => {
  const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/user/delete-user/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
    data,
  });
  return res.data;
};

// Lấy tất cả người dùng
export const getAllUser = async (access_token) => {
  const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/getAll`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

// Cập nhật người dùng
export const updateUser = async (id, data, access_token) => {
  const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/user/update/${id}`, data, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

// Xóa nhiều người dùng cùng lúc
export const deleteManyUser = async (data, access_token) => {
  const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/user/delete-many`, data, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};
