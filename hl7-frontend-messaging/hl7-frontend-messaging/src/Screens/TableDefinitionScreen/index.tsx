import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";

function createData(
    value: string,
    description: string,
    comment: string,
) {
    return {value, description, comment};
}

const rows = [
    createData(`F`, 'Female', ''),
    createData(`M`, 'Male', ''),
    createData(`O`, 'Other', ''),
    createData(`U`, 'Unknown', ''),
];

const TableDefinitionScreen = () => {
    const navigation = useNavigate();

    const handleClick = () => {
        navigation('/table');
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
                                textAlign: "left", // Align button text to the left
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
                                    <TableCell sx={{color: '#6c6962'}}>Value</TableCell>
                                    <TableCell align="center" sx={{color: '#6c6962'}}>Description</TableCell>
                                    <TableCell align="center" sx={{color: '#6c6962'}}>Comment</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.value}
                                        sx={{alignItems: 'center', '&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.value}
                                        </TableCell>
                                        <TableCell align="center">{row.description}</TableCell>
                                        <TableCell align="center">{row.comment}</TableCell>
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

export default TableDefinitionScreen;
