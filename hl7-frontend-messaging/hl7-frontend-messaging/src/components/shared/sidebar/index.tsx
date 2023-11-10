import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Header from "../header";
import Toolbar from "@mui/material/Toolbar";
import {Link} from "react-router-dom";
import theme from "../../../theme";
import DeleteIcon from '@mui/icons-material/Delete';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import {useState} from "react";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {Collapse, Typography} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from '@mui/icons-material/Send';

const drawerWidth = 240;

interface Props {
    window?: () => Window;
    showComposeCard: boolean;
    setShowComposeCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ResponsiveDrawer(props: Props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Header showComposeCard={props.showComposeCard} setShowComposeCard={props.setShowComposeCard} />
            <Toolbar />
            <Divider/>
            <List>
                {['Inbox'].map((text, index) => (
                    <ListItem
                        sx={{
                            "&:hover, &:active": {
                                backgroundColor: theme.palette.primary.dark,
                            },
                            color: theme.palette.primary.dark,
                        }}
                        key={text}
                        disablePadding
                    >
                        <ListItemButton
                            component={Link}
                            to="/home"
                            sx={{
                                "&:hover, &:active": {
                                    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                        color: 'white',
                                    },
                                },
                                color: theme.palette.primary.dark,
                            }}
                        >
                            <ListItemIcon sx={{color: theme.palette.primary.dark,}}>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>

                ))}
            </List>
            <Divider/>
            <List>
                <ListItem
                    sx={{
                        "&:hover, &:active": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        color: theme.palette.primary.dark,
                    }}
                    key={"Trash"}
                    disablePadding
                >
                    <ListItemButton
                        component={Link}
                        to="/delete"
                        sx={{
                            "&:hover, &:active": {
                                "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                    color: 'white',
                                },
                            },
                            color: theme.palette.primary.dark,
                        }}
                    >
                        <ListItemIcon sx={{color: theme.palette.primary.dark,}}>
                            <DeleteIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Trash"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem
                    sx={{
                        "&:hover, &:active": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        color: theme.palette.primary.dark,
                    }}
                    key={"Sent"}
                    disablePadding
                >
                    <ListItemButton
                        component={Link}
                        to="/sent"
                        sx={{
                            "&:hover, &:active": {
                                "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                    color: 'white',
                                },
                            },
                            color: theme.palette.primary.dark,
                        }}
                    >
                        <ListItemIcon sx={{color: theme.palette.primary.dark,}}>
                            <SendIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Sent"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem
                    sx={{
                        "&:hover, &:active": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        color: theme.palette.primary.dark,
                    }}
                    key={"Spam"}
                    disablePadding
                >
                    <ListItemButton
                        component={Link}
                        to="/spam"
                        sx={{
                            "&:hover, &:active": {
                                "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                    color: 'white',
                                },
                            },
                            color: theme.palette.primary.dark,
                        }}
                    >
                        <ListItemIcon sx={{color: theme.palette.primary.dark,}}>
                            <ReportGmailerrorredIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Spam"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem
                    sx={{
                        "&:hover, &:active": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        color: theme.palette.primary.dark,
                    }}
                    key={"Favourite"}
                    disablePadding
                >
                    <ListItemButton
                        component={Link}
                        to="/favourite"
                        sx={{
                            "&:hover, &:active": {
                                "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                    color: 'white',
                                },
                            },
                            color: theme.palette.primary.dark,
                        }}
                    >
                        <ListItemIcon sx={{color: theme.palette.primary.dark,}}>
                            <StarBorderIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Favourite"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem
                    sx={{
                        "&:hover, &:active": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        color: theme.palette.primary.dark,
                    }}
                    key={"HL7 Definition"}
                    disablePadding
                >
                    <ListItemButton
                        onClick={() => setOpen(!open)}
                        component={Link}
                        to="/hl7-definition"
                        sx={{
                            "&:hover, &:active": {
                                "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                    color: 'white',
                                },
                            },
                            color: theme.palette.primary.dark,
                        }}
                    >
                        <ListItemIcon sx={{color: theme.palette.primary.dark,}}>
                            <CollectionsBookmarkIcon />
                        </ListItemIcon>
                        <ListItemText primary={"HL7 Definition"}/>
                        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                sx={{
                                    "&:hover, &:active": {
                                        backgroundColor: theme.palette.primary.dark,
                                    },
                                    color: theme.palette.primary.dark,
                                }}
                                key={"Trigger Events"}
                                disablePadding
                            >
                                <ListItemButton
                                    component={Link}
                                    to="/trigger"
                                    sx={{
                                        "&:hover, &:active": {
                                            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                                color: 'white',
                                            },
                                        },
                                        color: theme.palette.primary.dark,
                                    }}
                                >
                                    <ListItemText primary={"Trigger Events"}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                sx={{
                                    "&:hover, &:active": {
                                        backgroundColor: theme.palette.primary.dark,
                                    },
                                    color: theme.palette.primary.dark,
                                }}
                                key={"Data Types"}
                                disablePadding
                            >
                                <ListItemButton
                                    component={Link}
                                    to="/data-type"
                                    sx={{
                                        "&:hover, &:active": {
                                            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                                color: 'white',
                                            },
                                        },
                                        color: theme.palette.primary.dark,
                                    }}
                                >
                                    <ListItemText primary={"Data Types"}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                sx={{
                                    "&:hover, &:active": {
                                        backgroundColor: theme.palette.primary.dark,
                                    },
                                    color: theme.palette.primary.dark,
                                }}
                                key={"Tables"}
                                disablePadding
                            >
                                <ListItemButton
                                    component={Link}
                                    to="/table"
                                    sx={{
                                        "&:hover, &:active": {
                                            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                                color: 'white',
                                            },
                                        },
                                        color: theme.palette.primary.dark,
                                    }}
                                >
                                    <ListItemText primary={"Tables"}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                sx={{
                                    "&:hover, &:active": {
                                        backgroundColor: theme.palette.primary.dark,
                                    },
                                    color: theme.palette.primary.dark,
                                }}
                                key={"Segments"}
                                disablePadding
                            >
                                <ListItemButton
                                    component={Link}
                                    to="/segment"
                                    sx={{
                                        "&:hover, &:active": {
                                            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                                color: 'white',
                                            },
                                        },
                                        color: theme.palette.primary.dark,
                                    }}
                                >
                                    <ListItemText primary={"Segments"}/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>
                </ListItem>
            </List>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'start',
                color: '#6c6962'
            }}>
            <Typography sx={{color: '#6c6962', mt:47 ,ml:1}}>Need Help?</Typography>
            </Box>
            <List>
                <ListItem
                    sx={{
                        "&:hover, &:active": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        color: theme.palette.primary.dark,
                    }}
                    key={"Favourite"}
                    disablePadding
                >
                    <ListItemButton
                        href={`mailto:test@example.com`}
                        sx={{
                            "&:hover, &:active": {
                                "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                    color: 'white',
                                },
                            },
                            color: theme.palette.primary.dark,
                        }}
                    >
                        <ListItemIcon sx={{color: theme.palette.primary.dark,}}>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Email"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem
                    sx={{
                        "&:hover, &:active": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        color: theme.palette.primary.dark,
                    }}
                    key={"Call"}
                    disablePadding
                >
                    <ListItemButton
                        sx={{
                            "&:hover, &:active": {
                                "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                                    color: 'white',
                                },
                            },
                            color: theme.palette.primary.dark,
                        }}
                    >
                        <ListItemIcon sx={{color: theme.palette.primary.dark,}}>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={"061-212-853"}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
