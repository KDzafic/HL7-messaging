import * as React from "react";
import {useEffect, useState} from "react";
import {Avatar, Box, Typography} from "@mui/material";
import {NotificationIconButtonStyled, NotificationMenuItemStyled, NotificationsMenuStyled,} from "./styled";
import NotificationIcon from "../../../assets/icons/NotificationIcon";
import {Message} from "../../../types/message";
import {BASE_PATH} from "../../../../constants/global";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const NotificationsMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [messages, setMessages] = useState<Message[]>();
    const [notificationIndicator, setNotificationIndicator] =
        useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getMessage = async () => {
            try {
                const receivedMessage = await axios.get(BASE_PATH + 'api/user/get/notifications');
                setMessages(receivedMessage.data);
            } catch (error: unknown) { /* empty */
            }
        };
        getMessage();
        if (messages?.length) {
            setNotificationIndicator(true);
        }
        console.log(notificationIndicator);
        console.log(messages?.length);
    }, []);

    const handleNotificationsMenuOpen = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        setAnchorEl(event.currentTarget);

        setNotificationIndicator(false);
    };

    const handleNotificationsMenuClose = () => {
        setAnchorEl(null);
    };

    function formatTimeAgo(dateStr: string): string {
        const parsedDate = new Date(dateStr);
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - parsedDate.getTime();

        if (timeDifference < 60000) {
            return 'just now';
        } else if (timeDifference < 3600000) {
            const minutesAgo = Math.floor(timeDifference / 60000);
            return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < 86400000) {
            const hoursAgo = Math.floor(timeDifference / 3600000);
            return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
        } else {
            const daysAgo = Math.floor(timeDifference / 86400000);
            return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
        }
    }

    return (
        <Box>
            <NotificationIconButtonStyled
                onClick={handleNotificationsMenuOpen}
                className="notificationsMenuIcon"
            >
                <NotificationIcon/>
                {notificationIndicator && <Box className="notificationsIndicator"/>}
            </NotificationIconButtonStyled>
            <NotificationsMenuStyled
                anchorEl={anchorEl}
                open={open}
                onClose={handleNotificationsMenuClose}
                transformOrigin={{horizontal: "right", vertical: "top"}}
                anchorOrigin={{horizontal: "right", vertical: "bottom"}}
            >
                {messages?.map((message) => (
                    <NotificationMenuItemStyled
                        key={message.id}
                        onClick={() => {
                            navigate(`/message/${message.id}`);
                        }}
                    >
                        <Avatar
                            alt="Logo"
                            src={message.sender.pictureUrl}
                            sx={{marginRight: (theme) => theme.spacing(3)}}
                        />
                        <Box>
                            <Box>
                                <Typography className="notificationTitle" variant="body1">{`${
                                    message.sender.firstName
                                } ${message.sender.lastName} ${message.type}`}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1">
                                    {formatTimeAgo(message.dateSent)}
                                </Typography>
                            </Box>
                        </Box>
                    </NotificationMenuItemStyled>
                ))}
            </NotificationsMenuStyled>
        </Box>
    );
};

export default NotificationsMenu;
