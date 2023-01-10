import React from "react";
import { Typography, IconButton, Stack, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";

import useAuth from "../../hooks/useAuth";

import { useDispatch } from "react-redux";
import { deletePost } from "./postSlice";

function PostDelete({ post }) {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleClose();
    dispatch(deletePost({ postId: post._id, user: user._id }));
  };

  return (
    <>
      {user._id === post.author._id ? (
        <>
          <IconButton onClick={handleMenu}>
            <DeleteIcon sx={{ color: "red", fontSize: "lage" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={{ color: "red", fontWeight: "bold" }}>
                Delete this post
              </Typography>
            </Box>

            <Stack direction="row" justifyContent={"space-between"}>
              <MenuItem sx={{ color: "red" }} onClick={handleDelete}>
                <DoneIcon sx={{ mr: 0.5 }} />
                <Typography>Yes</Typography>
              </MenuItem>
              <MenuItem sx={{ color: "green" }} onClick={handleClose}>
                <ClearIcon sx={{ mr: 0.5 }} />
                <Typography>No</Typography>
              </MenuItem>
            </Stack>
          </Menu>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default PostDelete;
