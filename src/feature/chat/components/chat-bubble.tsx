import React from "react";
import {
  Grid,
  Box,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography,
} from "@mui/material";

interface ChatBubbleProps {
  user: string;
  message: string;
  recieved: boolean;
  time: string;
}

function ChatBubble({
  user,
  message,
  time,
  recieved,
}: ChatBubbleProps): JSX.Element {
  return (
    <Grid
      container
      alignItems="center"
      direction={recieved ? "row" : "row-reverse"}
      gap={recieved ? 0 : 2}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <Box
        borderRadius={4}
        paddingX={2}
        paddingY={1}
        sx={(theme) =>
          recieved
            ? { backgroundColor: "#eee" }
            : { backgroundColor: theme.palette.primary.light }
        }
      >
        <Grid item xs={12}>
          <ListItemText
            secondary={user}
            sx={recieved ? {} : { textAlign: "end", color: "black" }}
          ></ListItemText>
          <ListItemText primary={message}></ListItemText>
        </Grid>
        <Grid item xs={12} textAlign="end">
          <ListItemText secondary={time}></ListItemText>
        </Grid>
      </Box>
    </Grid>
  );
}

export default ChatBubble;
