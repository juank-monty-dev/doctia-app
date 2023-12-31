import { Grid, Typography, Link } from "@mui/material";
import { UserQuestion } from "../components/UserQuestion";
import { DoctiaAnswer } from "../components/DoctiaAnswer";
import { Loader } from "../../ui";
import { useSelector } from "react-redux";
// import { DataTableReport } from "../components/DataTableReport";

export const DoctiaPage = () => {
  const { isLoading, isAnswered, prediction, labels, conversation } =
    useSelector((state) => state.doctia);

  return (
    <>
      <Grid
        container
        direction="column"
        sx={{ pt: 2, pb: 3, pl: 2, pr: 2, backgroundColor: "secondary.main" }}
      >
        <Typography color="primary.main" variant="h3" textAlign="center">
          Hola! Soy Doct-IA
        </Typography>
        <Typography color="red" variant="h6" textAlign="center">
          **** ESTO ES UN EXPERIMENTO ****
        </Typography>
        <Link href="/doctia-app/">
          <Typography color="secondary.main" variant="p" textAlign="center"   sx={{ pt: 2, pb: 3, pl: 2, pr: 2, backgroundColor: "primary.main", margin: "auto" }}>
            INICIAR NUEVAMENTE
          </Typography>
        </Link>
      </Grid>
      {conversation.map((q) => (
        <UserQuestion key={q.id} currentQuestion={q} />
      ))}

      <hr />
      {isLoading && <Loader message={"Consultando base de datos ..."} />}
      {!isLoading && (
        <DoctiaAnswer prediction={prediction} isOpen={isAnswered} />
      )}
      {!isLoading && isAnswered && JSON.stringify(labels, null, 3)}
    </>
  );
};
