import {
    clinicAdministratorsPath,
    clinicDetailsPath,
    clinicRoomsPath,
    clinicsPath,
    doctorsPath,
    homePath,
    medicinesPath,
    nursesPath,
    unregisteredUsersPath
} from "./paths";

const doctorsItem = {
    icon: 'mdi-account-tie',
    label: 'Doctors',
    path: doctorsPath
};

const nursesItem = {
    icon: 'mdi-account-tie',
    label: 'Nurses',
    path: nursesPath
};

const homeItem = {
    icon: 'mdi-home',
    label: 'Home',
    path: homePath
};

const clinicDetailsItem = {
    icon: 'mdi-home',
    label: 'Clinic details',
    path: clinicDetailsPath
};

const clinicsItem = {
    icon: 'mdi-hospital-building',
    label: 'Clinics',
    path: clinicsPath
};

const medicinesItem = {
    icon: 'mdi-pill',
    label: 'Medicine',
    path: medicinesPath
};

const clinicAdminsItem = {
    icon: 'mdi-account-tie',
    label: 'Clinic Administrators',
    path: clinicAdministratorsPath
};

const clinicRoomsItem = {
    icon: 'mdi-bed-empty',
    label: 'Clinic Rooms',
    path: clinicRoomsPath
};

const unregisteredUsersItem = {
    icon: 'mdi-account-multiple-check',
    label: 'User requests',
    path: unregisteredUsersPath,
};

const ClinicalCenterAdmin = {
    name: 'Clinical Center Admin',
    code: 'clinicCentarAdministrator',
    items: [
        homeItem,
        clinicsItem,
        medicinesItem,
        clinicAdminsItem,
        clinicRoomsItem,
        unregisteredUsersItem,
        doctorsItem,
        nursesItem
    ],
};

const ClinicAdmin = {
    name: 'Clinical Admin',
    code: 'clinicAdministrator',
    items: [
        clinicDetailsItem,
        medicinesItem,
        clinicRoomsItem,
        doctorsItem,
        nursesItem
    ],
};

const Patient = {
    name: 'Patient',
    code: 'Patient',
    items: [
        homeItem,
    ]
};

export {ClinicalCenterAdmin, ClinicAdmin, Patient};


