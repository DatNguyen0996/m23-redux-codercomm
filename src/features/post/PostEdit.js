import React, { useState } from "react";

import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";

import PostEditForm from "./PostEditForm";

import useAuth from "../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "60%" },
  bgcolor: "background.paper",
  border: "2px solid #555555",
  boxShadow: 24,
  p: 1,
  borderRadius: 1,
};

function PostEdit({ post }) {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    handleOpen();
    console.log(post);
  };
  return (
    <>
      {user._id === post.author._id ? (
        <>
          <IconButton onClick={handleClick}>
            <EditIcon sx={{ fontSize: "lage" }} />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography sx={{ pt: 1, pb: 2 }}>Edit post</Typography>
              <PostEditForm post={post} handleClose={handleClose} />
            </Box>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default PostEdit;
