import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";

function createData(
    segment: string,
    optionality: string,
    repeatability: string,
) {
    return {segment, optionality, repeatability};
}

const rows = [
    createData(`MSH - Message Header`, 'R', '-'),
    createData('EVN - Event Type', 'R', '-'),
    createData('PID - Patient Identification', 'R', '-'),
    createData('NK1 - Next Of Kin', 'R', '-'),
    createData('DG1 - Diagnosis', 'O', '-'),
];

const TriggerDefinitionScreen = () => {
    const navigation = useNavigate();

    const handleClick = () => {
        navigation('/trigger');
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
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 2,
                            marginLeft: 35,
                            width: "85%",
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
                            startIcon={<ArrowBackIcon />}
                        >
                        </Button>
                    </Box>
                    <TableContainer
                        sx={{width: "70%", display: "flex", justifyContent: "center"}}
                        component={Paper}
                    >
                        <Table sx={{width: "100%"}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{color: '#6c6962'}}>SEGMENT</TableCell>
                                    <TableCell align="center" sx={{color: '#6c6962'}}>OPTIONALITY</TableCell>
                                    <TableCell align="center" sx={{color: '#6c6962'}}>REPEATABILITY</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.segment}
                                        sx={{alignItems: 'center', '&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.segment}
                                        </TableCell>
                                        <TableCell align="center">{row.optionality}</TableCell>
                                        <TableCell align="center">{row.repeatability}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>
            </div>
        </Box>
    );
};

export default TriggerDefinitionScreen;
