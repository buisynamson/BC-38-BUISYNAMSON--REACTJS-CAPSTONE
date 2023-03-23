import React from "react";
import { getLocalStorage } from "../../utils/config";
import Users from './Users/Users'


export default function Dashboard() {
  const nameAdmin = getLocalStorage("USER");
  return (
    <>
      <h2 className="text-center font-bold text-2xl">
        Welcome Admin:
        <span className="text-orange-600"> {nameAdmin.hoTen}</span>
      </h2>
      <div className="flex justify-center items-center h-full mt-3">
				<Users />
				{/* <h3>Quyền của Admin</h3>
				<p> Chỉnh sửa, thêm người dùng</p> */}
      </div>
    </>
  );
}
