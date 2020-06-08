import {
    clinicAdministratorsPath,
    clinicRoomsPath,
    clinicsPath,
    homePath,
    medicinesPath,
    unregisteredUsersPath,
    doctorsPath,
    nursesPath,
    clinicDetailsPath,
    interventionTypePath,
    interventionPath,
    patientsPath,
    doctorHomePath,
    vacationRequestPath,
    clinicCenterAdministratorsPath,
    workingSchedulePath,
    appointmentRequestClinicPath,
    appointmentRequestPatientPath,
    oneClickAppointmentPath,
    diseasePath,
    medicalRecordPath
} from "./paths";

function doctorsItem(clinicID) {
    return {
        icon: 'mdi-account-tie',
        label: 'Doctors',
        path: doctorsPath.replace(":clinicID", clinicID)
    }
}

function medicalRecordItem(patientID) {
    return {
        icon: 'mdi-view-list',
        label: 'Doctors',
        path: medicalRecordPath.replace(":id", patientID)
    }
}

function oneClickAppointmentItem(clinicID) {
    return {
        icon: 'mdi-calendar-export',
        label: 'One click appointments',
        path: oneClickAppointmentPath.replace(":clinicID", clinicID)
    }
}

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

function clinicDetailsItem(id) {
    return {
        icon: 'mdi-home',
        label: 'Clinic',
        path: clinicDetailsPath.replace(":id", id)
    };
}

const interventionTypeItem = {
    icon: 'mdi-currency-eur',
    label: 'Intervention types and pricing',
    path: interventionTypePath
};

const interventionItem = {
    icon: 'mdi-home',
    label: 'Interventions',
    path: interventionPath
};

function appointmentRequestClinicItem(clinicID) {
    return {
        icon: 'mdi-calendar',
        label: 'Requests',
        path: appointmentRequestClinicPath.replace(':clinicID', clinicID)
    };
}

function appointmentRequestPatientItem(patientID) {
    return {
        icon: 'mdi-calendar',
        label: 'Requests',
        path: appointmentRequestPatientPath.replace(':patientID', patientID)
    };
}

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

const diseaseItem = {
    icon: 'mdi-pill',
    label: 'Diagnosis',
    path: diseasePath
};

const clinicAdminsItem = {
    icon: 'mdi-account-tie',
    label: 'Clinic Administrators',
    path: clinicAdministratorsPath
};

const clinicCenterAdminsItem = {
    icon: 'mdi-account-tie',
    label: 'Clinic Center Administrators',
    path: clinicCenterAdministratorsPath
};

function clinicRoomsItem(id) {
    return {
        icon: 'mdi-bed-empty',
        label: 'Clinic Rooms',
        path: clinicRoomsPath.replace(":clinicID", id)
    };
}

const unregisteredUsersItem = {
    icon: 'mdi-account-multiple-check',
    label: 'User requests',
    path: unregisteredUsersPath,
};

const patientsItem = {
    icon: 'mdi-account-heart',
    label: 'Patients',
    path: patientsPath,
};

const doctorHomeItem = {
    icon: 'mdi-home',
    label: 'Doctor Home',
    path: doctorHomePath,
};

const vacationRequestItem = {
	icon: 'mdi-home',
	label: 'Vacation request',
    path: vacationRequestPath,
};

const workingScheduleItem = {
    icon: 'mdi-calendar',
    label: 'Working Schedule',
    path: workingSchedulePath
};


const ClinicalCenterAdmin = {
    name: 'Clinical Center Admin',
    code: 'clinicCentarAdministrator',
    items: [
        homeItem,
        clinicCenterAdminsItem,
        clinicsItem,
        diseaseItem,
        medicinesItem,
        clinicAdminsItem,
        patientsItem,
        unregisteredUsersItem
    ],
};


class ClinicalAdmin {
    static name = 'Clinical Admin';
    static code = 'clinicAdministrator';
    constructor(id) {
        this.items = [
            clinicDetailsItem(id),
            interventionTypeItem,
            interventionItem,
            medicinesItem,
            clinicRoomsItem(id),
            doctorsItem(id),
            nursesItem,
            vacationRequestItem,
            appointmentRequestClinicItem(id),
            oneClickAppointmentItem(id)
        ]
    }
}


class Patient {
    static name = 'Patient';
    static code = 'Patient';
    constructor(patientID, userID) {
        this.items = [
            homeItem,
            clinicsItem,
            interventionTypeItem,
            appointmentRequestPatientItem(patientID),
            medicalRecordItem(userID)
        ]
    }
}

const Doctor = {
	name: 'Doctor',
    code: 'doctor',
    items: [
        workingScheduleItem,
        doctorHomeItem,
        vacationRequestItem,
        patientsItem
    ]
};
export {ClinicalCenterAdmin, ClinicalAdmin, Patient, Doctor};
