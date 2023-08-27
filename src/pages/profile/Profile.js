import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProfileAction } from "../signin-signup/adminAction";
import { AdminLayout } from "../../components/layout/AdminLayout";

import AdminProfileForm from "../../components/admin-profile/AdminProfileForm"; // Import the AdminProfileForm component

export const Profile = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.adminInfo);

  useEffect(() => {
    if (!admin._id) {
      dispatch(getAdminProfileAction());
    }
  }, [dispatch, admin._id]);

  return (
    <AdminLayout>
      <div>
        <h2>Welcome {admin?.fname}!</h2>
        <hr />
        <AdminProfileForm />
      </div>
    </AdminLayout>
  );
};

export default Profile;
