import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

type HeaderTypeProps = {
  title: string;
  subtitle: string;
};
export const Header = ({ title, subtitle }: HeaderTypeProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb={"30px"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
