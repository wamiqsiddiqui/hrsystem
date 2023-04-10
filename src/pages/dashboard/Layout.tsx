import { JSXElement } from "@babel/types"
import { Grid } from "@mui/material"
import { ReactNode } from "react"

export type LayoutProps = {
    children?: JSXElement|JSXElement[]
    rightElement? : ReactNode
  }
  
      // <Box m={"20px"}>
    //   <Box
    //     alignContent={"start"}
    //     display="flex"
    //     justifyContent={"space-between"}
    //     alignItems={"start"}
    //   >
    //     <Header title={"DASHBOARD"} subtitle={"Welcome to your Dashboard"} />
    //     <UploadCV />
    //   </Box>
    // </Box>
    
  export function Layout(props: LayoutProps){
    return (<>
      <Grid container spacing={1}>
        <Grid item md={3} xs={8}>
              LEFT
        </Grid>
        <Grid item md={6} xs={4}>
            CENTER
        </Grid>
        <Grid item md={3} xs={8}>
            {props.rightElement}
        </Grid>
      </Grid>
    </>)
  }