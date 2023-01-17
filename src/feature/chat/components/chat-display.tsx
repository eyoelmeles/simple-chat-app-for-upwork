import React from "react";
import { Grid, List, ListItem, Divider } from "@mui/material";
import ChatInputs from "./chat-form";
import ChatBubble from "./chat-bubble";
import { Group } from "../model/group";
import { Message } from "../model/message";
import { useAppSelector } from "@/store/hooks";
import { getSelectedGroup } from "../store/chat.store";

function ChatDisplay(): JSX.Element {
  const selectedGroup: Group | null = useAppSelector(getSelectedGroup);

  return (
    <Grid item xs={9}>
      <List sx={{ height: "75vh", overflowY: "auto" }}>
        {selectedGroup?.messages?.map((message: Message) => (
          <ListItem key={message.id}>
            <ChatBubble
              message={message.message}
              user="Eyoel"
              time="09:45"
              recieved={!(message?.fromuserid.toString() === "1")}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ChatInputs />
    </Grid>
  );
}

export default ChatDisplay;
