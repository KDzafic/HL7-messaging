import {Box, Button, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {useNavigate} from "react-router-dom";

const DataTypeScreen: React.FC = () => {
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
        navigation('/data-type/definition');
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - AD - Address
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - CE - Coded Element
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - CE_0057 -
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - CK - Composite Id With Check Digit
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - CM -
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - CM_UNDEFINED - Undefined Cm Data Type
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - CN - Composite Id Number And Name
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - COMP_ID_DIGIT - Composite Id W/chk Digit
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - COMP_ID_NAME - Composite Id And Name
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - COMP_QUANT - Composite Quantity/units
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - CQ - Composite Quantity With Units
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - DT - Date
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - FT - Formatted Text Data
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - ID - Coded Value
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
                    startIcon={<ArrowCircleUpIcon color="primary" />}
                >
                    {selectedOption} - NM - Numeric
                </Button>
            </Box>
        </Box>
    );
};

export default DataTypeScreen;
