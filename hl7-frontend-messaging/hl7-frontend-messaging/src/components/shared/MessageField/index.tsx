import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    FormControlLabel,
    Typography
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import {useEffect, useState} from "react";
import {BASE_PATH} from "../../../../constants/global";
import axios from "axios";
import {Message} from "../../../types/message";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import theme from "../../../theme";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import {useNavigate} from "react-router-dom";

interface Props {
    toShow: string;
    searchMessage: Message[];
}


const MessageField = (props: Props) => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const [messages, setMessages] = useState<Message[]>(props.searchMessage);
    const [page, setPage] = useState(0)
    const [length, setLength] = useState(0);
    const [starCheckedCheckboxes, setStarCheckedCheckboxes] = useState<Record<string, boolean>>({});
    const [deleteCheckedCheckboxes, setDeleteCheckedCheckboxes] = useState<Record<string, boolean>>({});
    const [spamCheckedCheckboxes, setSpamCheckedCheckboxes] = useState<Record<string, boolean>>({});
    const [expandCheckedCheckboxes, setExpandCheckedCheckboxes] = useState<Record<string, boolean>>({});
    const navigate = useNavigate();


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


    const handleExpandCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const isChecked = event.target.checked;
        console.log(expandCheckedCheckboxes);
        // Update the state variable with the checked state
        setExpandCheckedCheckboxes((prevState) => ({
            ...prevState,
            [key]: isChecked,
        }));

        if (!isChecked) {
            navigate(`/message/${key}`)
        }
    };

    const handleSpamCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>, key: string, user: string) => {
        const isChecked = event.target.checked;
        console.log(spamCheckedCheckboxes)
        setSpamCheckedCheckboxes((prevState) => ({
            ...prevState,
            [key]: isChecked,
        }));

        try {
            if (isChecked) {
                await axios.put(BASE_PATH + 'api/message/spam?messageId=' + key + '&userId=' + user);
            } else {
                await axios.put(BASE_PATH + 'api/message/unspam?messageId=' + key + '&userId=' + user);
            }
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };


    const handleDeleteCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const isChecked = event.target.checked;

        console.log(deleteCheckedCheckboxes);
        setDeleteCheckedCheckboxes((prevState) => ({
            ...prevState,
            [key]: isChecked,
        }));

        try {
            if (isChecked) {
                await axios.put(BASE_PATH + 'api/message/set-delete?messageId=' + key);
            } else {
                await axios.put(BASE_PATH + 'api/message/unset-delete?messageId=' + key);
            }
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };

    const handleStarCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const isChecked = event.target.checked;
        console.log(starCheckedCheckboxes);

        setStarCheckedCheckboxes((prevState) => ({
            ...prevState,
            [key]: isChecked,
        }));

        try {
            if (isChecked) {
                await axios.put(BASE_PATH + 'api/message/favourite?messageId=' + key);
            } else {
                await axios.put(BASE_PATH + 'api/message/unfavourite?messageId=' + key);
            }
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };

    useEffect(() => {
        console.log("props:" + props.searchMessage)
        if(props.searchMessage.length > 0){
            console.log("vece od 0")
        } else {
            console.log("manje od 0")
        }
        setMessages(props.searchMessage);
    }, [props.searchMessage]);

    useEffect(() => {
        console.log("props:" + props.searchMessage)
        if(props.searchMessage.length > 0){
            console.log("vece od 0")
        } else {
            console.log("manje od 0")
        }
        const getMessages = async () => {
            try {
                const receivedMessages = await axios.get(BASE_PATH + 'api/message/filter/messages?page=' + page);

                if (Array.isArray(receivedMessages.data.content) && receivedMessages.data.content.length > 0) {
                    setMessages(receivedMessages.data.content);
                    setLength(receivedMessages.data.content.length)
                }
            } catch (error: unknown) { /* Handle the error if needed */
            }
        };
        const getSentMessages = async () => {
            try {
                const receivedMessages = await axios.get(BASE_PATH + 'api/message/filter/sent-messages?page=' + page);

                // Check if the content is an array and not empty before setting messages
                if (Array.isArray(receivedMessages.data.content) && receivedMessages.data.content.length > 0) {
                    setMessages(receivedMessages.data.content);
                    setLength(receivedMessages.data.content.length)
                }
            } catch (error: unknown) { /* Handle the error if needed */
            }
        };
        const getFavouriteMessages = async () => {
            try {
                const receivedMessages = await axios.get(BASE_PATH + 'api/message/filter/favourite?page=' + page);

                // Check if the content is an array and not empty before setting messages
                if (Array.isArray(receivedMessages.data.content) && receivedMessages.data.content.length > 0) {
                    setMessages(receivedMessages.data.content);
                    setLength(receivedMessages.data.content.length)
                }
            } catch (error: unknown) { /* Handle the error if needed */
            }
        };
        const getDeleteMessages = async () => {
            try {
                const receivedMessages = await axios.get(BASE_PATH + 'api/message/filter/delete?page=' + page);

                // Check if the content is an array and not empty before setting messages
                if (Array.isArray(receivedMessages.data.content) && receivedMessages.data.content.length > 0) {
                    setMessages(receivedMessages.data.content);
                    setLength(receivedMessages.data.content.length)
                }
            } catch (error: unknown) { /* Handle the error if needed */
            }
        };
        const getSpamMessages = async () => {
            try {
                const receivedMessages = await axios.get(BASE_PATH + 'api/message/filter/spam?page=' + page);

                // Check if the content is an array and not empty before setting messages
                if (Array.isArray(receivedMessages.data.content) && receivedMessages.data.content.length > 0) {
                    setMessages(receivedMessages.data.content);
                    setLength(receivedMessages.data.content.length)
                }
            } catch (error: unknown) { /* Handle the error if needed */
            }
        };
        if (props.toShow === 'ALL') {
            getMessages();
        }
        if (props.toShow === 'SENT') {
            getSentMessages();
        }
        if (props.toShow === 'STAR') {
            getFavouriteMessages();
        }
        if (props.toShow === 'DELETE') {
            getDeleteMessages();
        }
        if (props.toShow === 'SPAM') {
            getSpamMessages();
        }
        console.log(messages);
    }, []);

    const handleNextClick = () => {
        setPage(page + 1);
    };

    const handlePrevClick = () => {
        setPage((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        console.log(event);
            setExpanded(isExpanded ? panel : false);
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
        <>
            {messages.map((option, index) => (
                <Accordion
                    key={index}
                    sx={{width: "60%"}}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                >
                    <AccordionSummary
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                        sx={{display: 'flex', alignItems: 'center'}}
                    >
                        <div style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                            <FormControlLabel
                                key={`${option.id}`}
                                control={
                                    <Checkbox
                                        checked
                                        icon={<UnfoldMoreIcon/>}
                                        checkedIcon={<UnfoldMoreIcon sx={{color: theme.palette.primary.main}}/>}
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(e) => handleExpandCheckboxChange(e, `${option.id}`)}
                                    />
                                }
                                label=""
                                sx={{marginRight: 1}}
                            />
                            <FormControlLabel
                                key={`${option.id}`}
                                control={
                                    <Checkbox
                                        defaultChecked={option.status === 'STAR'}
                                        icon={<StarIcon/>}
                                        checkedIcon={<StarIcon sx={{color: "gold"}}/>}
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(e) => handleStarCheckboxChange(e, `${option.id}`)}
                                    />
                                }
                                label=""
                                sx={{marginRight: 1}}
                            />
                        </div>
                        <div style={{
                            flex: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            marginTop: 12
                        }}>
                            <Typography sx={{marginRight: 10}}>
                                {option.sender.firstName} {option.sender.lastName}
                            </Typography>
                            <Typography sx={{color: 'text.secondary', marginRight: 20}}>
                                {option.type}
                            </Typography>
                            <Typography>
                                {formatTimeAgo(option.dateSent)}
                            </Typography>

                        </div>
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end'
                        }}>
                            <FormControlLabel
                                key={`${option.id}`}
                                control={
                                    <Checkbox
                                        defaultChecked={option.status === 'SPAM'}
                                        icon={<ReportGmailerrorredIcon/>}
                                        checkedIcon={<ReportGmailerrorredIcon sx={{color: "gold"}}/>}
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(e) => handleSpamCheckboxChange(e, `${option.id}`, `${option.sender.id}`)}
                                    />
                                }
                                label=""
                                sx={{marginRight: 1}}
                            />
                            <FormControlLabel
                                key={`${option.id}`}
                                control={
                                    <Checkbox
                                        defaultChecked={option.status === 'DELETE'}
                                        icon={<DeleteIcon/>}
                                        checkedIcon={<DeleteIcon sx={{color: "red"}}/>}
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(e) => handleDeleteCheckboxChange(e, `${option.id}`)}
                                    />
                                }
                                label=""
                                sx={{marginRight: 1}}
                            />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography dangerouslySetInnerHTML={{__html: addNewlines(option.message, header)}}>
                        </Typography>
                        {props.toShow === 'DELETE' && (<div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px',
                        }}>
                            <Button fullWidth sx={{color: theme.palette.error.main}} endIcon={<DeleteIcon/>}>Delete
                                Permenantly</Button>
                        </div>)}
                    </AccordionDetails>
                </Accordion>
            ))}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 2,
                }}
            >
                <Button onClick={handlePrevClick} startIcon={<ArrowBackIcon/>} disabled={page === 0}>
                </Button>
                <Button onClick={handleNextClick} endIcon={<ArrowForwardIcon/>} disabled={length < 10}>
                </Button>
            </Box>
        </>
    );
};

export default MessageField;