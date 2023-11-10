export type CreateUserDto = {
    firstname: string;
    lastname: string;
    phone: string;
    profession: string;
    address: string;
    email: string;
    password: string;
    medicalFacilityId: string;
};

export type UserDto = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    profession: string;
    password: string;
    phone: string;
    address: string;
    lastActivity: string;
    pictureUrl: string;
};