import {Box, Button, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import {useNavigate} from "react-router-dom";

const TriggerScreen: React.FC = () => {
    // const [query, setQuery] = useState<string>("");
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
        navigation('/trigger/definition');
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

                {selectedOption !== 'HL7 v2.1' && <Button
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} ACK - General acknowledgment message
                </Button>}

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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption === 'HL7 v2.1' && (`${selectedOption} - ADT_A01 - Admit a Patient`)}
                    {selectedOption !== 'HL7 v2.1' && (`${selectedOption} - Admit/visit notification`)}
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A02 - Transfer a Patient
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A03 - Discharge a Patient
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A04 - Register a Patient
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A05 - admit a Patient
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A06 - Transfer an Outpatient to Inpatient
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A07 - Transfer an Inpatient to Outpatient
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A08 - Update Patient Information
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A09 - Patient Departing
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A10 - Patient Arriving
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A11 - Cancel Admit
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A12 - Cancel Transfer
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A13 - Cancel Discharge
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A14 - Pending Admit
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
                    startIcon={<OfflineBoltIcon color="primary" />}
                >
                    {selectedOption} - ADT_A15 - Pending Transfer
                </Button>
            </Box>
        </Box>
    );
};

export default TriggerScreen;
