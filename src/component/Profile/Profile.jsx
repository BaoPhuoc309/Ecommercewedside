import React, { useEffect, useState } from "react";
import { Card, Avatar, Button, Upload, message, Modal } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
import { ROUTER_APP } from "../../constant/Router";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchAllUsers,
  actFetchAllUsersById,
  actUpdateUserAvatar,
  actUpdateUserById,
} from "../../redux/feature/userSlice";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfor } = useSelector((state) => state.user);

  console.log(userInfor?.avatar, "avatar");

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Bạn chỉ có thể tải lên các tệp JPG/PNG!");
      return false;
    }
    return true;
  };

  const handleChange = async ({ fileList }) => {
    console.log(fileList, "fileList");

    if (fileList.length > 0) {
      const file = fileList[0].originFileObj;
      const base64 = await getBase64(file);

      if (userInfor && userInfor.id) {
        dispatch(
          actUpdateUserAvatar({
            id: userInfor.id,
            updatedUser: {
              avatar: base64,
            },
          })
        );
      }
    }

    setFileList(fileList.slice(-1)); // Giới hạn danh sách tệp tải lên chỉ chứa 1 tệp
  };

  const uploadButton = (
    <div>
      {userInfor?.avatar ? (
        <Avatar size={64} src={userInfor?.avatar} />
      ) : (
        <Avatar size={64} icon={<UserOutlined />} />
      )}
    </div>
  );

  useEffect(() => {
    if (userInfor?.id) {
      dispatch(actFetchAllUsersById(userInfor?.id));
    }
  }, [userInfor?.id]);

  return (
    <div className="container">
      <div className="profile-wrapper">
        <Card className="profile-card">
          <Upload
            action={`${process.env.REACT_APP_BE_URL}users/${userInfor?.id}`}
            listType="picture-card"
            fileList={fileList}
            beforeUpload={beforeUpload}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length === 1 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>
          <h1 className="profile-title">{userInfor?.username}</h1>

          <Link to={ROUTER_APP.CHANGEINFO}>
            <Button type="primary">Thay đổi thông tin cá nhân</Button>
          </Link>
          <Link to={ROUTER_APP.CHANGEPASSWORD}>
            <Button type="primary">Thay đổi mật khẩu</Button>
          </Link>
          <Link to={ROUTER_APP.HISTORY}>
            <Button type="primary">Xem lịch sử đơn hàng</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
