import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import GavelIcon from '@mui/icons-material/Gavel';

import './App.css'
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
const getIcon = (text: string) => {
  switch(text) {
    case 'Employee': return <BadgeIcon />;
    case 'Employee': return <ScheduleIcon />;
    case 'Payroll': return <PaymentIcon />;
    case 'Self-Service': return <PersonIcon />;
    case 'Compliance': return <GavelIcon />;
    default: return <BadgeIcon />;
  }
}

const { signOut } = useAuthenticator();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Tric's Rice Mill
            </Typography>

          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
          >
            <Toolbar />
            <Divider />
            <List>
              {['Employee', 'Attendance',
              'Payroll', 'Self-Service',
            'Compliance'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {getIcon(text)}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <BadgeIcon /> : <PersonIcon />
                      }
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
              <Button loadingText="Signing out..." onClick={signOut}>Sign out</Button>   
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >
            <Toolbar />
            <Typography sx={{ marginBottom: 2 }}>
              Lorem ipsum dolor sit amet,
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Consequat mauris nunc congue nisi vitae suscipit.
            </Typography>
          </Box>
    </Box>
  );
}

