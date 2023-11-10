import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography} from '@mui/material';
import {Link, useNavigate} from "react-router-dom";
import Logout from '@mui/icons-material/Logout';
import * as React from "react";
import {Settings} from "@mui/icons-material";
import NotificationsMenu from "../NotificationsMenu";
import {useContext, useEffect, useState} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import InboxIcon from '@mui/icons-material/Inbox';
import DeleteIcon from "@mui/icons-material/Delete";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import Person2Icon from '@mui/icons-material/Person2';
import {UserDto} from "../../../types/authentication";
import {BASE_PATH} from "../../../../constants/global";
import axios from "axios";
import {AuthenticationContext} from "../../../context/AuthenticationContext";

const buttonData = ['Inbox', 'Trash', 'Profile', 'HL7 Definition', 'Send Message'];

interface Props {
    window?: () => Window;
    showComposeCard: boolean;
    setShowComposeCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [user, setUser] = useState<UserDto>();
    const {signOut} =
        useContext(AuthenticationContext);

    useEffect(() => {
        const getUser = async () => {
            try {
                const receivedUser = await axios.get(BASE_PATH + 'api/user/get');
                setUser({
                    id: receivedUser.data.id,
                    firstname: receivedUser.data.firstname,
                    lastname: receivedUser.data.lastname,
                    email: receivedUser.data.email,
                    profession: receivedUser.data.profession,
                    phone: receivedUser.data.phone,
                    address: receivedUser.data.address,
                    password: receivedUser.data.password,
                    lastActivity: receivedUser.data.lastActivity,
                    pictureUrl: receivedUser.data.pictureUrl
                });
            } catch (error: unknown) { /* empty */ }
        };
        getUser();
    }, []);


    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < buttonData.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        signOut();
        navigate('/');
    };

    const handleProfile = () => {
        setAnchorEl(null);
        navigate('/profile');
    };

    const handleSettings = () => {
        setAnchorEl(null);
        navigate('/settings');
    };


    const handleInbox = () => {
        navigate('/home');
    };

    const handlehl7 = () => {
        navigate('/hl7-definition');
    };

    const handleSendMessage = () => {
        props.setShowComposeCard(!props.showComposeCard);
    };


    return (
        <AppBar style={{ background: 'white' }} elevation={0}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme => theme.palette.primary.main }}>
                    <Link to="/home">
                        <Button size="large"> <Avatar
                            src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" alt="Logo" />
                        </Button>
                    </Link>
                </Typography>
                <div style={{ flex: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 100 }}>
                    <Button onClick={handlePrevClick} startIcon={<ArrowBackIcon />} disabled={currentIndex === 0}>
                    </Button>
                    {buttonData[currentIndex] === 'Send Message' && <Button onClick={handleSendMessage} endIcon={<SendIcon />}>{buttonData[currentIndex]}</Button>}
                    {buttonData[currentIndex] === 'Inbox' && <Button onClick={handleInbox} endIcon={<InboxIcon />}>{buttonData[currentIndex]}</Button>}
                    {buttonData[currentIndex] === 'Trash' && <Button endIcon={<DeleteIcon />}>{buttonData[currentIndex]}</Button>}
                    {buttonData[currentIndex] === 'Profile' && <Button onClick={handleProfile} endIcon={<Person2Icon />}>{buttonData[currentIndex]}</Button>}
                    {buttonData[currentIndex] === 'HL7 Definition' && <Button onClick={handlehl7} endIcon={<CollectionsBookmarkIcon />}>{buttonData[currentIndex]}</Button>}
                    <Button onClick={handleNextClick} endIcon={<ArrowForwardIcon />} disabled={currentIndex === buttonData.length - 1}>
                    </Button>
                </div>
                <NotificationsMenu />
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={user?.pictureUrl} alt="Logo"/>
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                    <MenuItem onClick={handleProfile}>
                        <Avatar src={user?.pictureUrl}/> My Profile
                    </MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleSettings}>
                        <ListItemIcon>
                            <Settings fontSize="small"/>
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small"/>
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
