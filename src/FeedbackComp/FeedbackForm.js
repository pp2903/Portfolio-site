import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Typography } from "@mui/material";
const FeedbackForm = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

const Form = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    feedback_text: "",
  });

  const handleFeebackChange = (e) => {
    const newFeeback = { ...feedback, [e.target.name]: e.target.value };
    console.log(newFeeback);
    setFeedback(newFeeback);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4oiysbb",
      "template_3c5qzfe",
      form.current,
      "QIU5Ootiw_fM5NswA"
    );

    e.target.reset();
  };

  const textFieldAttrs = {
    display: "block",
    marginBottom: "6px",
    bgcolor: "white",
    borderRadius: "6px",
  };
  return (
    <>
      <Box
        ref={form}
        component="form"
        sx={{ flexGrow: 1 }}
        onSubmit={sendEmail}
        noValidate
        autoComplete="off"
      >
        <Typography
          id="feedback-heading"
          variant="h5"
          component="h5"
          gutterBottom
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize:'40px'
          }}
        >
          {" "}
          Feedback!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleFeebackChange}
              fullWidth
              name="name"
              sx={textFieldAttrs}
              id="standard-basic"
              label="Name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleFeebackChange}
              fullWidth
              name="email"
              sx={textFieldAttrs}
              id="standard-basic"
              label="Email"
              variant="standard"
            />
          </Grid>



          <Grid item xs={12} >
          <TextField
            minRows={10}
            multiline
            onChange={handleFeebackChange}
            name="feedback"
            sx={textFieldAttrs}
            className="feedback"
            fullWidth
            label="Share your thoughts!"
            id="feedback-field"
            variant="standard"
            size="large"
            />
            </Grid>

          
        </Grid>
        <Button
            type="submit"
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
