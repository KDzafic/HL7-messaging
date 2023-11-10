import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { CreateUserDto, UserDto } from '../types/authentication';
import {BASE_PATH, COOKIE_DOMAIN, TOKEN_COOKIE_KEY} from "../../constants/global";

export interface AuthenticationContextProps {
    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    user?: UserDto;
    userLoaded: boolean;
    signIn: (username: string, password: string) => void;
    signUp: (createUserData: CreateUserDto, callback: () => void) => void;
    signOut: () => void;
}

export const AuthenticationContext = createContext({} as AuthenticationContextProps);

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const cookies = new Cookies();
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState<UserDto>();
    const [userLoaded, setUserLoaded] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const receivedUser = await axios.get(BASE_PATH + 'api/user/get');
                setUser({
                    id: receivedUser.data.id,
                    firstname: receivedUser.data.firstname,
                    lastname: receivedUser.data.lastname,
                    email: receivedUser.data.email,
                    profession: receivedUser.data.profession,
                    phone: receivedUser.data.phone,
                    address: receivedUser.data.address,
                    password: receivedUser.data.password,
                    lastActivity: receivedUser.data.lastActivity,
                    pictureUrl: receivedUser.data.pictureUrl
                });
                setUserLoaded(true);
            } catch (error: unknown) { /* empty */ }
        };

        if (authenticated) {
            getUser();
        } else {
            setUserLoaded(true);
        }
    }, [authenticated]);

    const signIn = async (email: string, password: string) => {
        try {
            const response = await axios.post(BASE_PATH + 'api/auth/signin', {
                email: email,
                password: password
            });
            setAuthenticated(true);
            if (COOKIE_DOMAIN) {
                cookies.set(TOKEN_COOKIE_KEY, response.data, { path: '/', domain: COOKIE_DOMAIN });
            } else {
                cookies.set(TOKEN_COOKIE_KEY, response.data);
            }
        } catch (err: unknown) {
            setAuthenticated(false);
        }
    };

    const signUp = async (createUserData: CreateUserDto, callback: () => void) => {
        try {
            await axios.post(BASE_PATH + 'api/auth/signup', {
                firstname: createUserData.firstname,
                lastname: createUserData.lastname,
                phone: createUserData.phone,
                profession: createUserData.profession,
                address: createUserData.address,
                email: createUserData.email,
                password: createUserData.password,
                medicalFacilityId: createUserData.medicalFacilityId,
            });
            callback();
        } catch (err: unknown) { /* empty */ }
    };

    const signOut = () => {
        cookies.remove(TOKEN_COOKIE_KEY);
        setAuthenticated(false);
        setUser(undefined);
    };

    return (
        <AuthenticationContext.Provider
            value={{
                authenticated,
                setAuthenticated,
                user,
                userLoaded,
                signIn,
                signUp,
                signOut,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
