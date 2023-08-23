import { Typography } from "@mui/material"
import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <Typography variant="h3">{subtitle} </Typography>
        <Typography variant="h1">{title} </Typography>
      </div>
    </>
  )
}

export default Heading
