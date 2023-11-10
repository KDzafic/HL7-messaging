import {Box, IconButton, TextField} from "@mui/material";
import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import MessageField from "../../components/shared/MessageField";


const FavouriteScreen = () => {
    const [query, setQuery] = useState("");


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
                        onChange={(e) => setQuery(e.target.value)}
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
                            flexDirection: 'column',
                            marginTop: 2,
                            width: "100%"
                        }}
                    >
                        <MessageField toShow={'STAR'}></MessageField>
                    </Box>
                </div>
            </Box>
        </Box>
    );
};

export default FavouriteScreen;
