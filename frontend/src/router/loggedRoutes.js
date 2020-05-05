import Main from "../views/Main";
import Clinics from "../pages/Clinics";
import Home from "../pages/Home";
import ClinicAdministrators from "../pages/ClinicAdministrators";
import ClinicRooms from "../pages/ClinicRooms";
import Doctor from "../pages/Doctor";
import Medicine from "../pages/Medicine";
import {
    clinicAdministratorsPath,
    clinicRoomsPath,
    clinicsPath, diseasePath,
    doctorsPath,
    homePath,
    medicinesPath
} from "../utils/paths";
import Disease from "../pages/Disease";

const loggedRoutes = [
    {
        path: homePath,
        component: Home,
    },
    {
        path: clinicsPath,
        component: Clinics,
    },
    {
        path: clinicAdministratorsPath,
        component: ClinicAdministrators,
    },

    {
        path: clinicRoomsPath,
        component: ClinicRooms,
    },

    {
        path: doctorsPath,
        component: Doctor,
    },

    {
        path: medicinesPath,
        component: Medicine,
    },
    {
        path: diseasePath,
        component: Disease,
    }


];

export default loggedRoutes;
