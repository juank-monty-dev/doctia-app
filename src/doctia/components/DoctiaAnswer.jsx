import { Grid, Typography, Modal, Box, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { swapIsAnswered } from "../../store";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const DoctiaAnswer = ({ prediction = "TESTING", isOpen }) => {
  const [open, setOpen] = useState(isOpen);
  const handleClose = () => {
    setOpen(false);
    // useDispatch(swapIsAnswered);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography color="black" variant="h6">
          {prediction}
        </Typography>
        <Link href="/doctia-app/">
          <Typography color="blue" variant="h6">
            Volver a intentar
          </Typography>
        </Link>
      </Box>
    </Modal>
  );
};
