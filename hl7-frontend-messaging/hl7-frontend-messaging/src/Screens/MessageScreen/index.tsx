import {Avatar, Box, Card, Typography} from '@mui/material';
import {useEffect, useState} from "react";
import {BASE_PATH} from "../../../constants/global";
import axios from "axios";
import {Message} from "../../types/message";

const MessageScreen = () => {
    const [message, setMessage] = useState<Message>();

    const header: string[] = [
        "ACC - Accident",
        "BLG - Billing",
        "DG1 - Diagnosis",
        "DSP - Display Data",
        "ERR - Error",
        "IN1 - Insurance",
        "MSA - Message Acknowledgement",
        "EVN - Event Type",
        "NK1 - Next Of Kin",
        "NST - Statistics",
        "NTE - Notes And Comments",
        "OBX - Result",
        "PD1 - Patient Demographics",
        "PID - Patient Identification",
        "PV1 - Patient Visit",
        "PR1 - Procedures",
        "RX1 - Pharmacy Order"
    ];

    function addNewlines(message: string | undefined, header: string[]) {
        const escapedHeader = header.map(keyword => keyword.replace(/ /g, "\\s"));
        const regexPattern = new RegExp(`(${escapedHeader.join('|')})`, 'g');

        let parts: string[] = [];
        if (message !== undefined) {
            parts = message.split(regexPattern);
        }

        const formattedMessage = parts
            .map((part: string) => header.includes(part) ? `<br>${part}` : part)
            .join('');

        console.log("Format: " + formattedMessage);
        console.log("Message: " + message);
        return formattedMessage;
    }


    useEffect(() => {
        const currentURL = window.location.href;
        const urlParts = currentURL.split('/');

        const id = urlParts[urlParts.length - 1];

        console.log(id);
        const getMessage = async () => {
            try {
                const receivedMessage = await axios.get(BASE_PATH + 'api/message?messageId=' + id);
                setMessage(receivedMessage.data);
            } catch (error: unknown) { /* empty */
            }
        };
        getMessage();
    }, []);

    function formatTimeAgo(dateStr: string | undefined): string | undefined {
        if (dateStr !== undefined) {
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
            return "test";
        }
    }

    return (
        <Box sx={{flexGrow: 1}} textAlign="center">
            <div>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2,
                    }}
                >
                    <Card sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginLeft: 30,
                        padding: 5,
                        width: "80%",
                        mb: 2
                    }}>
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                            }}>
                                <Avatar src={message?.sender.pictureUrl} alt="Logo"
                                        sx={{width: 55, height: 55, marginRight: 2}}/>
                                <Typography variant="h6"
                                            sx={{padding: 2}}>{message?.sender.firstName} {message?.sender.lastName}</Typography>
                                <Typography variant="h6" sx={{padding: 2}}>{message?.sender.email}</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                }}>
                                    <Typography variant="h6" sx={{mt: 5, color: '#6c6962'}}>To:</Typography>
                                    <Typography variant="h6"
                                                sx={{mt: 5, color: '#6c6962'}}>{message?.receiver.email}</Typography>

                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start'
                                }}>
                                    <Typography variant="h6" sx={{mt: 5}}>Type:</Typography>
                                    <Typography variant="h6" sx={{mt: 5}}>{message?.type}</Typography>

                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{
                                        mt: 5, display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start'
                                    }}
                                                dangerouslySetInnerHTML={{__html: addNewlines(message?.message, header)}}
                                    ></Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{
                                        mt: 5,
                                        fontWeight: 'bold'
                                    }}>{formatTimeAgo(message?.dateSent)}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </div>
        </Box>
    );
};

export default MessageScreen;
