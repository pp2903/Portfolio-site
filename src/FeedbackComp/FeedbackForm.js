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
  const [feedback, setFeedback] = useState({
    name:'',
    email:'',
    feedback_text:'',
  });
    
  const handleFeebackSubmit = (e) => {
    e.preventDefault();
    console.log("successful submit")
    console.log(feedback)
  };

  const handleFeebackChange = (e)=>{
    const newFeeback = {...feedback,[e.target.name]:e.target.value}
    console.log(newFeeback);
    setFeedback(newFeeback)

  }
  return (
    <>
      <Box
        component="form"
        sx={{
          width: "50%",
          maxWidth: "100%",
        
        }}
        
        noValidate
        autoComplete="off"
      >

        <h4 id="feedback-heading">Feedback!</h4>

        <TextField onChange={handleFeebackChange} fullWidth name="name" sx={{display:'block',marginBottom:'6px', bgcolor: "white" }} id="standard-basic" label="Name" variant="standard" />
        <TextField onChange={handleFeebackChange} fullWidth name="email" sx={{display:'block',marginBottom:'6px', bgcolor: "white" }} id="standard-basic" label="Email" variant="standard" />
        <TextField
          minRows={10}
          
          multiline
          onChange={handleFeebackChange}
          name="feedback"
          sx={{ bgcolor: "white" }}
          className="feedback"
          fullWidth
          label="Share your thoughts!"
          id="feedback-field"
          variant="standard"
          size="large"
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
