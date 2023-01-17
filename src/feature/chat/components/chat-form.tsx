import { Grid, TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { useCreateGroupMutation } from "../store/chat.query";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "@/store/hooks";
import { getSelectedGroup } from "../store/chat.store";

function ChatInputs(): JSX.Element {
  const selectedGroup = useAppSelector(getSelectedGroup);
  const [createNewMessage] = useCreateGroupMutation();
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: async (values) => {
      // TODO: Make a json server.
      try {
        const date = new Date();
        if (selectedGroup !== null) {
          const body = {
            ...selectedGroup,
            messages: [
              ...selectedGroup.messages,
              {
                message: values.message,
                id: nanoid(),
                fromuserid: 1,
                touserid: 2,
                time: `${date.getHours()} : ${date.getMinutes()}: ${date.getSeconds()}}`,
              },
            ],
          };
          console.log(body);
          await createNewMessage(body);
        }
      } catch (error) {
        console.log(error);
      }
    },
    // validationSchema: yup.object({
    //   message: yup.string().required("Need to provide a message!"),
    // }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        sx={{ p: 2, alignItems: "center", justifyContent: "space-evenly" }}
        gap={2}
        textAlign="end"
      >
        <Grid item xs={10}>
          <TextField
            multiline
            placeholder="write message, ctrl + Enter to send"
            fullWidth
          />
        </Grid>
        <Grid>
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ChatInputs;
