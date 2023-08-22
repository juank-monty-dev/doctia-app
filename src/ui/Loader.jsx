import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const Loader = ({ message = "" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "18px",
        backgroundColor: "primary.accent",
        alignItems: "center",
        borderRadius: "36px",
        width: "400px",
        margin: "auto",
        marginTop: "24px",
        boxShadow: 3 ,
      }}
    >
      <CircularProgress />
      <Typography
        variant="caption"
        display="block"
        align="center"
        sx={{ marginLeft: "24px" }}
      >
        {message}
      </Typography>
    </Box>
  );
};
