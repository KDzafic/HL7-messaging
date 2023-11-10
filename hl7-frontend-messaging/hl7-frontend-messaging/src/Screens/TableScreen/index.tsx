import {Box, Button, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import {useNavigate} from "react-router-dom";

const TableScreen: React.FC = () => {
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
        navigation('/table/definition');
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0001 - SEX
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0002 - MARITAL STATUS
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0003 - EVENT TYPE CODE
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0004 - PATIENT CLASS
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0005 - ETHNIC GROUP
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0006 - RELIGION
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0007 - ADMISSION TYPE
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0008 - ACKNOWLEDGMENT CODE
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0009 - AMBULATORY STATUS
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0010 - PHYSICIAN ID
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0011 - CHARGING SYSTEM
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0012 - STOCK LOCATION
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0013 - CHARGEABLE OR NON-CHARGEABLE
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0014 - HEIGHT UNIT OF MEASURE
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
                    startIcon={<DensitySmallIcon color="primary" />}
                >
                    {selectedOption} - 0015 - WEIGHT UNIT OF MEASURE
                </Button>
            </Box>
        </Box>
    );
};

export default TableScreen;
