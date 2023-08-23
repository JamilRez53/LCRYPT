import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import MenuIcon from "@mui/icons-material/Menu";
const pages = ['userTopics','Quiz','userTutorials'];
const DrawerComp=()=>{
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
      <React.Fragment>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
           <List>
        {['UserTopics', 'Quiz','UserTutorials','Queries'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton  href={`./${text.toLowerCase()}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Drawer>
        <IconButton
          sx={{ color: "#007bff", marginLeft: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon  />
        </IconButton>
      </React.Fragment>
    );
}
export default DrawerComp;