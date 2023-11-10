import {Alert, Avatar, Box, Button, Card, IconButton, Snackbar, TextField, Typography} from '@mui/material';
import theme from "../../theme";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PasswordIcon from "@mui/icons-material/Password";
import {useEffect, useState} from "react";
import {User} from "../../types/user";
import {BASE_PATH} from "../../../constants/global";
import axios from "axios";
import * as yup from "yup";
import {useFormik} from "formik";

const validationSchema = yup.object({
    email: yup.string().required().email(),
    confirmEmail: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    phone: yup.string().required(),
    address: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
});

const SettingsScreen = () => {
    const [user, setUser] = useState<User>();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleClose = () => {
        setOpen(false);
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            phone: '',
            address: '',
            firstName: '',
            lastName: ''
        },
        validationSchema,
        onSubmit: async ({email, confirmEmail, password, confirmPassword, phone, address, firstName, lastName}) => {
            try {
                const receivedData = await axios.put(BASE_PATH + 'api/user/update', {
                    "email": email,
                    "confirmEmail": confirmEmail,
                    "password": password,
                    "confirmPassword": confirmPassword,
                    "phone": phone,
                    "address": address,
                    "firstName": firstName,
                    "lastName": lastName
                });
                console.log(receivedData);
            }  catch (e) {
                console.error("Update", e);
                setOpen(true);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setMessage(e?.response.data?.message);
            }
        }
    });

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
            } catch (error: unknown) { /* empty */
            }
        };
        getUser();
    }, []);


    return (
        <Box sx={{flexGrow: 1}} textAlign="center">
            <div>
                <Box
                    component="form"
                    onSubmit={formik.handleSubmit}
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
                                <Avatar src={user?.pictureUrl} alt="Logo"
                                        sx={{width: 128, height: 128, marginRight: 2}}/>
                                <Typography variant="h4"
                                            sx={{padding: 6}}>{user?.firstName} {user?.lastName}</Typography>
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
                                    <TextField
                                        name="firstName"
                                        label="FirstName"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                bgcolor: "white",
                                            },
                                        }}
                                        margin="none"
                                        placeholder="First Name"
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Last Name:</Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        name="lastName"
                                        label="LastName"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                bgcolor: "white",
                                            },
                                        }}
                                        margin="none"
                                        placeholder="Last Name"
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Email:</Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        name="email"
                                        label="Email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                bgcolor: "white",
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
                                                    <EmailIcon/>
                                                </IconButton>
                                            ),
                                        }}
                                        margin="none"
                                        placeholder="Email"
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Confirm
                                        Email:</Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        name="confirmEmail"
                                        label="ConfirmEmail"
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmEmail}
                                        error={formik.touched.confirmEmail && Boolean(formik.errors.confirmEmail)}
                                        helperText={formik.touched.confirmEmail && formik.errors.confirmEmail}
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                bgcolor: "white",
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
                                                    <EmailIcon/>
                                                </IconButton>
                                            ),
                                        }}
                                        margin="none"
                                        placeholder="Confirm Email"
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Password:</Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        name="password"
                                        label="Password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        size="small"
                                        type="password"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                bgcolor: "white",
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
                                                    <PasswordIcon/>
                                                </IconButton>
                                            ),
                                        }}
                                        margin="none"
                                        placeholder="Password"
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Confirm
                                        Password:</Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        name="confirmPassword"
                                        label="ConfirmPassword"
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmPassword}
                                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                        size="small"
                                        type="password"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                bgcolor: "white",
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
                                                    <PasswordIcon/>
                                                </IconButton>
                                            ),
                                        }}
                                        margin="none"
                                        placeholder="Confirm Password"
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Phone:</Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        name="phone"
                                        label="Phone"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                bgcolor: "white",
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
                                                    <PhoneIcon/>
                                                </IconButton>
                                            ),
                                        }}
                                        margin="none"
                                        placeholder="Phone Number"
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold'}}>Address:</Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        name="address"
                                        label="Address"
                                        onChange={formik.handleChange}
                                        value={formik.values.address}
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        helperText={formik.touched.address && formik.errors.address}
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                bgcolor: "white",
                                            },
                                        }}
                                        margin="none"
                                        placeholder="Adress"
                                    />
                                </Box>
                                <Box>
                                    <Button type="submit" startIcon={<EditIcon/>}
                                            sx={{
                                                mt: 5,
                                                backgroundColor: theme.palette.primary.main, '&:hover': {
                                                    bgcolor: theme.palette.secondary.main,
                                                    color: theme.palette.primary.main
                                                },
                                                color: theme.palette.secondary.main
                                            }}>Apply</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {message}
                        </Alert>
                    </Snackbar>
                </Box>
            </div>
        </Box>

    );
};

export default SettingsScreen;
