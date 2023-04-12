import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import { ChangeEvent, useState } from "react";

export enum UploadTypes {
  File = "file",
  URL = "url",
}
export type UploadCVArgs = {
  data: string;
  type: UploadTypes;
};

export type UploadCVProps = {
  onUpload?: (arg: UploadCVArgs) => void;
};

export const UploadCV = (props: UploadCVProps) => {
  const [uploaded, setUploaded] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedCVValue, setSelectedCVValue] = useState("Upload");
  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectedCVValue(event.target.value);
  };

  const { onUpload } = props;

  if (!uploaded) {
    return (
      <Box
        m={"20px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignContent={"start"}
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <FormControl>
          <Typography
            // textAlign={"center"}
            p={"20px"}
            variant="h3"
            color={colors.grey[100]}
            id="fileUploadRadioGroup"
          >
            Upload CV
          </Typography>
          <RadioGroup
            sx={{ flexWrap: "nowrap", padding: "4vh" }}
            onChange={onRadioChange}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Upload"
            name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio />}
              label={"Upload File"}
              value={"Upload"}
            ></FormControlLabel>
            <div className="">
              {selectedCVValue === "Upload" && (
                <div>
                  <input className="" type="file" placeholder="Select File" />
                </div>
              )}
            </div>
            <FormControlLabel
              control={<Radio />}
              label={"Other Source"}
              value={"Other"}
            ></FormControlLabel>
            {selectedCVValue === "Other" && (
              <TextField placeholder="Enter CV URL "></TextField>
            )}
          </RadioGroup>
          <Button
            sx={{ backgroundColor: colors.grey[100] }}
            onClick={() => {
              onUpload?.({
                type: UploadTypes.URL,
                data: "",
              });
              setUploaded(true);
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    );
  } else {
    return <>Thank you for uploading</>;
  }
};
