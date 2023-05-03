import PatientsIcon from "../assets/icons/patients.svg";
import DocumentsIcon from "../assets/icons/documents.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import UsersIcon from "../assets/icons/users.svg";

import UserIcon from "../assets/icons/user.svg";

import DiscussionIcon from "../assets/icons/discussion-white.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: PatientsIcon,
    path: "/MedcineDash/patients",
    title: "Patients",
  },
  {
    id: 2,
    icon: DocumentsIcon,
    path: "/MedcineDash/dossier",
    title: "Dossier",
  },
  {
    id: 3,
    icon: CalendarIcon,
    path: "/MedcineDash/rendezvous",
    title: "Rendez-vous",
  },
  {
    id: 4,
    icon: DiscussionIcon,
    path: "/MedcineDash/discussion",
    title: "Discussion",
  },
  {
    id: 5,
    icon: UsersIcon,
    path: "/MedcineDash/Articles",
    title: "Articles",
  },
  {
    id: 6,
    icon: UsersIcon,
    path: "/MedcineDash/users",
    title: "Utilisateur",
  },
  {
    id: 7,
    icon: UserIcon,
    path: "/MedcineDash/profile",
    title: "Mon Compte",
  },
];

export default sidebar_menu;
