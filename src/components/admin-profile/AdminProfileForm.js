import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Form, Spinner, Modal } from "react-bootstrap";
import { updateProfileUser } from "../../pages/signin-signup/adminAction";

const initialProfileState = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  address: "",
};

const AdminProfileForm = () => {
  const dispatch = useDispatch();

  const [adminProfile, setAdminProfile] = useState(initialProfileState);
  const { admin, isPending, userUpdateResp } = useSelector(
    (state) => state.adminInfo
  );

  useEffect(() => {
    setAdminProfile(admin);
  }, [admin]);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleShowPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleUpdatePassword = () => {
    const { currentPassword, newPassword, confirmPassword } = passwords;

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    // Dispatch your update password action here
    // Make sure to handle errors and success messages accordingly

    handleClosePasswordModal();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { fName, lName, email, phone, address } = adminProfile;

    if (
      admin.fName !== fName ||
      admin.lName !== lName ||
      admin.email !== email ||
      admin.phone !== phone ||
      admin.address !== address
    ) {
      const updateData = { fName, lName, email, phone, address };
      dispatch(updateProfileUser(updateData));
    } else {
      alert("No changes have been made.");
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAdminProfile({
      ...adminProfile,
      [name]: value,
    });
  };

  return (
    <div className="admin-profile-page">
      <h2 className="text-center">Update Profile</h2>
      <hr />

      {isPending && <Spinner variant="primary" animation="border" />}
      {userUpdateResp?.message && (
        <Alert
          variant={userUpdateResp?.status === "success" ? "success" : "danger"}
        >
          {userUpdateResp?.message}
        </Alert>
      )}

      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="fName"
            value={adminProfile.fName}
            onChange={handleOnChange}
            placeholder="Enter your first name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lName"
            value={adminProfile.lName}
            onChange={handleOnChange}
            placeholder="Enter your last name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={adminProfile.email}
            type="email"
            placeholder="Enter your email"
            required
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="phone"
            value={adminProfile.phone}
            onChange={handleOnChange}
            placeholder="Enter your phone number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            value={adminProfile.address}
            onChange={handleOnChange}
            placeholder="Enter your address"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit" variant="primary" size="lg">
            Update Profile
          </Button>
          <Button
            type="button"
            variant="info"
            onClick={handleShowPasswordModal}
            className="mt-2"
          >
            Update Password
          </Button>
        </div>
      </Form>

      <Modal show={showPasswordModal} onHide={handleClosePasswordModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handlePasswordChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePasswordModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdatePassword}>
            Update Password
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProfileForm;
