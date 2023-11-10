import React, {ChangeEvent, useState} from "react";
import {Box, IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MessageField from "../../components/shared/MessageField";
import {BASE_PATH} from "../../../constants/global";
import axios from "axios";
import {Message} from "../../types/message";

const DashboardScreen: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleTextFieldChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const enteredText = e.target.value;
        console.log("Entered Text:", enteredText);
        setQuery(enteredText);
        try {
            const receivedMessages = await axios.get(BASE_PATH + 'api/message/filter/full-search?text=' + enteredText);
            if (Array.isArray(receivedMessages.data.content) && receivedMessages.data.content.length > 0) {
                setMessages(receivedMessages.data.content);
            } else {
                setMessages([]);
            }
        } catch (error) {
            console.error('Axios Error:', error);
        }
        console.log("props iz dash:" + messages)
    };


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
                    <TextField
                        size="small"
                        sx={{
                            width: "20%",
                            "& .MuiInputBase-root": {
                                bgcolor: "white",
                                borderRadius: "20px",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <IconButton
                                    type="button"
                                    sx={{p: "10px"}}
                                    aria-label="search"
                                    disabled
                                >
                                    <SearchIcon/>
                                </IconButton>
                            ),
                        }}
                        margin="none"
                        placeholder="Search in message"
                        value={query}
                        onChange={handleTextFieldChange}
                    />
                </Box>
            </div>
            <Box sx={{flexGrow: 1}} textAlign="center">
                <div>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginTop: 2,
                            width: "100%",
                        }}
                    >
                        <MessageField searchMessage={messages} toShow={"ALL"}/>
                    </Box>
                </div>
            </Box>
        </Box>
    );
};

export default DashboardScreen;
