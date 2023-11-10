import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    CardContent,
    Fab,
    IconButton,
    MenuItem,
    Popper,
    Select,
    TextField,
    Typography
} from '@mui/material';
import {AuthenticationContext} from "../../context/AuthenticationContext";
import SideBar from "../../components/shared/sidebar";
import SendIcon from '@mui/icons-material/Send';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import CloseIcon from '@mui/icons-material/Close';
import {BASE_PATH} from "../../../constants/global";
import axios from "axios";
import {UserDto} from "../../types/authentication";
import {SelectChangeEvent} from "@mui/material/Select";
import theme from "../../theme";
import {User} from "../../types/user";

const ProtectedLayout: React.FC = () => {
    const {authenticated} = useContext(AuthenticationContext);
    const [showComposeCard, setShowComposeCard] = useState(false);
    const [email, setEmail] = useState('');
    const [result, setResult] = useState<UserDto[]>();
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const anchorRef = React.useRef<HTMLDivElement | null>(null);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [informationDivs, setInformationDivs] = useState<string[]>([]);
    const [selectedOptionsHeader, setSelectedOptionsHeader] = useState<string[]>([]);
    const [messageValues, setMessageValues] = useState<string[]>([]);
    const [user, setUser] = useState<User>();

    const generateRandomNumber = () => {
        const min = 100000;
        const max = 999999;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    };

    const handleTextFieldChange = (index: number, value: string) => {
        const newMessageValues = [...messageValues];
        newMessageValues[index] = value;
        setMessageValues(newMessageValues);
    };

    useEffect(() => {
        const initialSelectedOptions = Array(header.length).fill("");
        setSelectedOptionsHeader(initialSelectedOptions);
        const getUser = async () => {
            try {
                const receivedUser = await axios.get(BASE_PATH + 'api/user/get');
                setUser({
                    id: receivedUser.data.id,
                    firstName: receivedUser.data.firstName,
                    lastName: receivedUser.data.lastName,
                    email: receivedUser.data.email,
                    profession: receivedUser.data.profession,
                    password: receivedUser.data.password,
                    phone: receivedUser.data.phone,
                    address: receivedUser.data.address,
                    lastActivity: receivedUser.data.lastActivity,
                    role: receivedUser.data.role,
                    pictureUrl: receivedUser.data.pictureUrl,
                    medicalFacility: receivedUser.data.medicalFacility
                });
            } catch (error: unknown) { /* empty */
            }
        };
        getUser();
    }, []);

    const handleOptionChangeHeader = (e: SelectChangeEvent<string>, index: number) => {
        const newSelectedOptions = [...selectedOptionsHeader];
        newSelectedOptions[index] = e.target.value;
        setSelectedOptionsHeader(newSelectedOptions);
    };

    function getCurrentDate() {
        const currentDate = new Date();

        const year = currentDate.getFullYear().toString();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');

        const formattedDate = year + month + day + hours + minutes + seconds;

        return formattedDate;
    }

    const sendMessage = async () => {
        let dataToSend = "MSH|^~\\&||Sending|" + user?.email + "|Receiving|" + email + "|"
            + getCurrentDate() + "||" + selectedOption.replace("_", "^").substring(0, 7) + "|" +
            generateRandomNumber() + "|P|2.1\n" + "EVN|" + selectedOption.substring(4, 7) + "|" + getCurrentDate() + "|||\n";
        for (let i = 0; i < selectedOptionsHeader.length; i++) {
            dataToSend += selectedOptionsHeader[i].substring(0,3) + "|" + "1" + "|" + messageValues[i].replace(/ /g, '||') + "\n";
        }
        await axios.post(BASE_PATH + 'api/message/create', {
            "message": dataToSend
        });
        console.log(dataToSend);
    }


    const trigger: string[] = [
        "ADT_AO1 - Admit a Patient",
        "ADT_AO2 - Transfer a Patient",
        "ADT_AO3 - Discharge a Patient",
        "ADT_AO4 - Register a Patient",
        "ADT_AO6 - Transfer an Outpatient to Inpatient",
        "ADT_AO7 - Transfer an Inpatient to Outpatient",
        "ADT_AO8 - Update Patient Information",
        "ADT_AO9 - Patient Departing",
        "ADT_A10 - Patient Arriving",
        "BAR_P01 - Add and Update Patient Accounts",
        "DFT_P03 - Post Detail Financial Transactions",
        "ORM_O01 - Order Message",
        "ORR_O02 - Response Message",
        "QRY_A19 - Patient Query"
    ];

    const header: string[] = [
        "ACC - Accident",
        "BLG - Billing",
        "DG1 - Diagnosis",
        "DSP - Display Data",
        "ERR - Error",
        "IN1 - Insurance",
        "MSA - Message Acknowledgement",
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


    const addInformation = () => {
        setInformationDivs([...informationDivs, 'New Information Div']);
    };

    const handleOptionChange = (e: SelectChangeEvent<string>) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setEmail(value);

        try {
            const receivedEmail = await axios.get(BASE_PATH + 'api/user/filter/email?email=' + value);
            setResult(receivedEmail.data);
            setShowSuggestions(receivedEmail.data.length > 0);
            console.log(receivedEmail.data);
        } catch (error) {
        }

        setAnchorEl(anchorRef.current);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setEmail(suggestion);
        setShowSuggestions(false);
    };

    const toggleComposeCard = () => {
        setShowComposeCard(!showComposeCard);
        setInformationDivs([]);
        setSelectedOption("");
        setSelectedOptionsHeader([]);
    };

    if (!authenticated) return <Navigate replace to="/sign-in"/>;

    return (
        <>
            <SideBar showComposeCard={showComposeCard} setShowComposeCard={setShowComposeCard}/>
            <Box sx={{height: '100%'}}>
                <Box sx={{height: '100%', display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '100%'}}>
                        <Box sx={{minHeight: '100vh', display: 'flex'}}>
                            <Outlet/>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div style={{position: 'fixed', bottom: '20px', right: '20px'}}>
                {showComposeCard ? (
                    <Card sx={{width: "500px"}}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px',
                            backgroundColor: theme.palette.info.main
                        }}>
                            <Typography sx={{color: "white"}}>New Message</Typography>
                            <IconButton onClick={toggleComposeCard}>
                                <CloseIcon sx={{color: "white"}}/>
                            </IconButton>
                        </div>
                        <CardContent>
                            <div ref={anchorRef}
                                 style={{
                                     display: 'flex',
                                     justifyContent: 'space-between',
                                     alignItems: 'center',
                                     padding: '8px',
                                 }}>
                                <Typography sx={{mr: 2, color: '#6c6962'}}>To:</Typography>
                                <TextField
                                    fullWidth
                                    value={email}
                                    variant="standard"
                                    onChange={handleInputChange}
                                />
                                {showSuggestions && (
                                    <Popper open={showSuggestions} anchorEl={anchorEl}>
                                        <Box
                                            sx={{border: 1, p: 1, bgcolor: 'background.paper', borderColor: '#6c6962'}}>
                                            {result?.map((suggestion) => (
                                                <Button key={suggestion.id} sx={{width: "100%", color: '#6c6962'}}
                                                        onClick={() => handleSuggestionClick(suggestion.email)}>
                                                    {suggestion.email}
                                                </Button>
                                            ))}
                                        </Box>
                                    </Popper>
                                )}
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '8px',
                            }}>
                                <Typography sx={{color: '#6c6962'}}>Trigger Event:</Typography>
                                <Select
                                    size="small"
                                    sx={{
                                        width: "100%",
                                        bgcolor: 'white',
                                        "& .MuiSelect-root": {
                                            borderRadius: "20px", // Making the Select component rounded
                                        },
                                    }}
                                    margin="none"
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                >
                                    {trigger.map((option, index) => (
                                        <MenuItem key={index} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                            {informationDivs.map((option, index) => (
                                <div
                                    key={option}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <Typography sx={{color: '#6c6962', mr: 1}}>Header:</Typography>
                                    <Select
                                        size="small"
                                        sx={{
                                            mr: 1,
                                            width: "30%",
                                            bgcolor: 'white',
                                            "& .MuiSelect-root": {
                                                borderRadius: "20px",
                                            },
                                        }}
                                        margin="none"
                                        value={selectedOptionsHeader[index]}
                                        onChange={(e: SelectChangeEvent<string>) => handleOptionChangeHeader(e, index)}
                                    >
                                        {header.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <TextField
                                        key={index}
                                        placeholder="Message"
                                        sx={{width: '70%'}}
                                        variant="outlined"
                                        value={messageValues[index] || ''}
                                        onChange={(e) => handleTextFieldChange(index, e.target.value)}
                                    />
                                </div>
                            ))}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '8px',
                            }}>
                                <Button onClick={addInformation} fullWidth sx={{color: theme.palette.primary.main}}>Add
                                    Information</Button>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    padding: '8px',
                                }}
                            >
                                <Button onClick={sendMessage}
                                        sx={{
                                            bgcolor: theme.palette.info.main,
                                            color: "white",
                                            borderRadius: "25px",
                                            "&:hover": {
                                                bgcolor: theme.palette.info.main,
                                                transform: 'scale(1.1)',
                                            },
                                        }}
                                        endIcon={<SendIcon/>}>Send</Button>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <Fab color="info" aria-label="add" onClick={toggleComposeCard}>
                        <LocalPostOfficeIcon color="secondary"/>
                    </Fab>
                )}
            </div>
        </>
    );
};

export default ProtectedLayout;
