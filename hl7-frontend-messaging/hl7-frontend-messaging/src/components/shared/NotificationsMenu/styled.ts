import { IconButton, Menu, MenuItem, styled } from "@mui/material";

export const NotificationIconButtonStyled = styled(IconButton)(({ theme }) => ({
    padding: theme.spacing(1.5),
    background: theme.palette.secondary.main,
    boxSizing: "content-box",
    position: "relative",
    maxWidth: "fit-content",
    "& .notificationsIndicator": {
        position: "absolute",
        top: 5,
        right: 5,
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "#FF1715",
        border: `1.5px solid ${theme.palette.common.white}`,
    },
}));

export const NotificationsMenuStyled = styled(Menu)(() => ({
    "& .MuiPaper-root": {
        maxWidth: 285,
    },
}));

export const NotificationMenuItemStyled = styled(MenuItem)(({ theme }) => ({
    padding: theme.spacing(4, 4, 1, 4),
    "& .notificationTitle": {
        whiteSpace: "break-spaces",
    },
}));