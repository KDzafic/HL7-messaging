import {Avatar, Box, Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useFormik} from "formik";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import * as yup from 'yup';
import {useContext} from "react";
import {AuthenticationContext} from "../../context/AuthenticationContext";

const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()
});


const SignIn = () => {
    const {signIn} =
        useContext(AuthenticationContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async ({email, password}) => {
            await signIn(email, password);
            console.log(email + password);
        }
    });

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
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            spacing: 2,
                            maxWidth: 400,
                            minWidth: 300,
                            width: '100%',
                            border: 1,
                            borderRadius: '8px',
                            bgcolor: 'white',
                            m: 3,
                            p: 3,
                        }}
                    >
                        <Avatar src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" alt="Logo"
                                sx={{display: 'block', margin: '0 auto'}}
                        />
                        <Typography variant="h4" sx={{mt: 2, color: theme => theme.palette.primary.main}}>
                            Welcome
                        </Typography>
                        <Typography variant="body1" sx={{mb: 2, color: theme => theme.palette.primary.main}}>
                            Log in to Caristix to Caristix Apps.
                        </Typography>
                        <TextField
                            name="email"
                            label="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon sx={{color: theme => theme.palette.primary.main}}/>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            sx={{my: 2}}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon sx={{color: theme => theme.palette.primary.main}}/>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Button variant="contained" type="submit" size="large" sx={{
                            mt: 2, bgcolor: theme => theme.palette.info.main, '&:hover': {
                                bgcolor: '#96AB5B'
                            }
                        }}>
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </div>
        </Box>
    );
};

export default SignIn;