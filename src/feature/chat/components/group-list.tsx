import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
  Typography,
} from "@mui/material";

interface GroupListProps {
  imgURL: string;
  imgAlt?: string;
  title: string;
  description: string;
  onClick: () => void;
}

function GroupList({
  imgURL,
  imgAlt = "group",
  title,
  description,
  onClick,
}: GroupListProps): JSX.Element {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    onClick();
  };
  return (
    <ListItem dense sx={{ padding: 0, margin: 0 }}>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={onClick}
        sx={{ borderBottom: 1, borderColor: "#eef" }}
      >
        <ListItemAvatar>
          <Avatar alt={imgAlt} src={imgURL} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                variant="body2"
                fontWeight="bold"
                color="text.primary"
              >
                {title}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="text.primary">
                {description}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}

export default GroupList;
