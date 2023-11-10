import {Box, Button, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {useNavigate} from "react-router-dom";

const SegmentScreen: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>("HL7 v2.1");
    const navigation = useNavigate();

    const options: string[] = [
        "HL7 v2.1",
        "HL7 v2.2",
        "HL7 v2.3",
        "HL7 v2.3.1",
        "HL7 v2.4",
        "HL7 v2.5",
        "HL7 v2.5.1",
        "HL7 v2.6",
        "HL7 v2.7",
        "HL7 v2.7.1",
        "HL7 v2.8",
    ];

    const handleOptionChange = (e: SelectChangeEvent<string>) => {
        setSelectedOption(e.target.value);
    };

    const handleClick = () => {
        navigation('/segment/definition');
    };

    return (
        <Box sx={{flexGrow: 1}} textAlign="center">
            <div>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2,
                    }}
                >
                    <Typography sx={{color: '#6c6962'}}>Select HL7 Version</Typography>
                    <Select
                        size="small"
                        sx={{
                            width: "20%",
                            bgcolor: 'white',
                            "& .MuiSelect-root": {
                                borderRadius: "20px",
                            },
                        }}
                        margin="none"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <MenuItem value="" disabled>
                            HL7 INTERNATIONAL SPECIFICATIONS
                        </MenuItem>
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            </div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    marginLeft:35,
                    width:"80%",
                }}
            >

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - ACC - Accident
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - ADD - Addendum
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - BHS - Batch Header
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - BLG - Billing
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - BTS - Batch Trailer
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - DG1 - Diagnosis
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - DSC - Continuation Pointer
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - DSP - Display Data
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - ERR - Error
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - EVN - Event Type
                </Button>


                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - FHS - File Header
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - FT1 - Financial Transaction
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - FTS - File Trailer
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - GT1 - Guarantor
                </Button>

                <Button
                    onClick={handleClick}
                    sx={{
                        fontSize: 18,
                        marginBottom: 1,
                        color: "#6c6962",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        width: "100%",
                        textAlign: "left", 
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                    size="large"
                    startIcon={<KeyboardReturnIcon color="primary" />}
                >
                    {selectedOption} - IN1 - Insurance
                </Button>
            </Box>
        </Box>
    );
};

export default SegmentScreen;
