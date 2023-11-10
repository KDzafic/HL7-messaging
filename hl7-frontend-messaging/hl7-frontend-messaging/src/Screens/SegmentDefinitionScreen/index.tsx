import {
    Box,
    Button, Collapse,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useState} from "react";

function createData(
    field: string,
    length: number,
    datatype: string,
    optionality: string,
    repeatability: string,
) {
    return {field, length, datatype, optionality, repeatability,data: [
            {
                length: 0,
                dataType: 'ID - Coded Value',
                optionality: "Optional",
                repeatability: "Not Repeatable"
            }]};
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.field}
                </TableCell>
                <TableCell align="center">{row.field}</TableCell>
                <TableCell align="center">{row.length}</TableCell>
                <TableCell align="center">{row.datatype}</TableCell>
                <TableCell align="center">{row.optionality}</TableCell>
                <TableCell align="center">{row.optionality}</TableCell>
                <TableCell align="center">{row.repeatability}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Length</TableCell>
                                        <TableCell>Data Type</TableCell>
                                        <TableCell align="center">Optionality</TableCell>
                                        <TableCell align="center">Repeatability</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.data.map((historyRow) => (
                                        <TableRow key={historyRow.length}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.length}
                                            </TableCell>
                                            <TableCell>{historyRow.dataType}</TableCell>
                                            <TableCell align="center">{historyRow.optionality}</TableCell>
                                            <TableCell align="center">
                                                {historyRow.repeatability}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const rows = [
    createData(`ACC.1 - Accident Date/Time`, 19, 'TS', 'O','-'),
    createData(`ACC.2 - Accident Code`, 2, 'ID', 'O','-'),
    createData(`ACC.3 - Accident Location`, 25, 'ST', 'O','-'),
];

const SegmentDefinitionScreen = () => {
    const navigation = useNavigate();

    const handleClick = () => {
        navigation('/segment');
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
                        <Table sx={{width: "100%"}} aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell sx={{color: '#6c6962'}}>Field</TableCell>
                                    <TableCell align="center" sx={{color: '#6c6962'}}>Length</TableCell>
                                    <TableCell align="center" sx={{color: '#6c6962'}}>Data Type</TableCell>
                                    <TableCell align="center" sx={{color: '#6c6962'}}>Optionality</TableCell>
                                    <TableCell align="center" sx={{color: '#6c6962'}}>Repeatability</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <Row key={row.field} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </Box>
    );
};

export default SegmentDefinitionScreen;
