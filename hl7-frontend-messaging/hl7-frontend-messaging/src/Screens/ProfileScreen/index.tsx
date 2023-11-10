import {Avatar, Box, Button, Card, Typography} from '@mui/material';
import theme from "../../theme";
import EditIcon from "@mui/icons-material/Edit";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {BASE_PATH} from "../../../constants/global";
import {User} from "../../types/user";
import axios from "axios";

const ProfileScreen = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();

    useEffect(() => {
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
            } catch (error: unknown) { /* empty */ }
        };
        getUser();
    }, []);


    const handleSettings = () => {
        navigate('/settings');
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
                    <Card sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginLeft: 30,
                        padding: 5,
                        width: "80%",
                        mb: 2
                    }}>
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                            }}>
                                <Avatar src={user?.pictureUrl} alt="Logo" sx={{width: 128, height: 128, marginRight: 2}}/>
                                <Typography variant="h4" sx={{padding: 6}}>{user?.firstName} {user?.lastName}</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>First Name:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{user?.firstName}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Last Name:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{user?.lastName}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Email:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{user?.email}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Profession:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{user?.email}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Phone:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{user?.phone}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Adress:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{user?.address}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Medicinska ustanova:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{user?.medicalFacility.name}</Typography>
                                </Box>
                                <Box>
                                    <Button onClick={handleSettings} startIcon={<EditIcon/>}
                                            sx={{
                                                mt: 5,
                                                backgroundColor: theme.palette.primary.main, '&:hover': {
                                                    bgcolor: theme.palette.secondary.main,
                                                    color: theme.palette.primary.main
                                                },
                                                color: theme.palette.secondary.main
                                            }}>Edit Settings</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </div>
        </Box>
    );
};

export default ProfileScreen;
