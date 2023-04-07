import {
  AppBar,
  Button,
  Container,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import AddVacancy from "../components/AddVacancy";
import { ChangeEvent, useState } from "react";

export const AddCV = () => {
  const [selectedCVValue, setSelectedCVValue] = useState("Upload");
  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectedCVValue(event.target.value);
  };
  return (
    <div className="dashboardRoot">
      {/* <div className="panel">Header</div> */}
      <AppBar title="AppBar" sx={{ padding: "3vh" }}>
        HEADER
      </AppBar>

      <div className="radioGroup">
        <FormControl>
          <FormLabel id="fileUploadRadioGroup">Upload</FormLabel>
          <RadioGroup
            sx={{ flexWrap: "nowrap", alignItems: "center", padding: "4vh" }}
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
          <Button>Submit</Button>
        </FormControl>
      </div>
      <div className="footer"> Footer</div>
    </div>
  );
};
