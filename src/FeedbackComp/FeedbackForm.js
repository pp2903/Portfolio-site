import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const FeedbackForm = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

const Form = () => {
  const [feedback, setFeedback] = useState("");
    
  const handleFeebackSubmit = (e) => {
    e.preventDefault();
    console.log("successful submit")
    console.log(feedback)
  };

  const handleFeebackChange = (e)=>{
    const newFeeback = e.target.value;
    
    setFeedback(newFeeback)

  }
  return (
    <>
      <Box
        component="form"
        sx={{
          width: "500px",
          maxWidth: "100%",
        }}
        noValidate
        autoComplete="off"
      >

        <h4>Feedback!</h4>
        <TextField
          onChange={handleFeebackChange}
          name="feedback"
          sx={{ bgcolor: "white" }}
          className="feedback"
          fullWidth
          label="Share your thoughts!"
          id="fullWidth"
          variant="standard"
        />

        <Button
            type="submit"
          onClick={handleFeebackSubmit}
          sx={{ marginTop: 2 }}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default FeedbackForm;
