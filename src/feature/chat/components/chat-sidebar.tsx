import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Toolbar,
  List,
  Typography,
} from "@mui/material";

import { Search } from "@mui/icons-material";
import GroupList from "./group-list";
import { useGetGroupsQuery } from "../store/chat.query";
import { Group } from "../model/group";
import { useAppDispatch } from "@/store/hooks";
import { setSelectedGroup } from "../store/chat.store";

function ChatSidebar(): JSX.Element {
  const dispatch = useAppDispatch();
  // Quering
  const { data: groups, isSuccess: isDoneFetchingGroups } = useGetGroupsQuery({
    params: { params: "" },
  });

  React.useEffect(() => {}, [isDoneFetchingGroups, groups]);

  const handleGroupClick = (group: Group) => {
    dispatch(setSelectedGroup(group));
  };

  return (
    <Box
      sx={{
        borderRight: 1,
        borderColor: "gray",
        textAlign: "center",
        // minWidth: 350,
      }}
    >
      <TextField
        size="small"
        placeholder="Search Groups"
        type="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <Toolbar>
        <Typography variant="h6">Groups</Typography>
      </Toolbar>
      <List dense>
        {isDoneFetchingGroups &&
          groups.length > 0 &&
          groups?.map((group: any) => (
            <GroupList
              key={group?.id}
              imgURL="/static/images/avatar/1.jpg"
              title={group?.title}
              description={group?.description}
              onClick={() => handleGroupClick(group)}
            />
          ))}
      </List>
    </Box>
  );
}

export default ChatSidebar;
