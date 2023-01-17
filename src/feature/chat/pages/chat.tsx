import { Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import ChatDisplay from "../components/chat-display";
import ChatSidebar from "../components/chat-sidebar";
import { useGetMessagesQuery } from "../store/chat.query";

function ChatWrapper(): JSX.Element {
  return (
    <Box>
      <Toolbar>
        <Typography variant="h4" fontWeight="bold">
          Chatter Logo
        </Typography>
      </Toolbar>
      <Grid container component={Paper}>
        <Grid item xs={3}>
          <ChatSidebar />
        </Grid>

        <Grid item xs={9}>
          <ChatDisplay />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChatWrapper;
