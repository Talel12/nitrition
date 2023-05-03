import PatientsIcon from "../assets/icons/patients.svg";
import DocumentsIcon from "../assets/icons/documents.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import UsersIcon from "../assets/icons/users.svg";

import UserIcon from "../assets/icons/user.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: CalendarIcon,
    path: "/PatientDash/rendezvous",
    title: "Rendez-vous",
  },
  {
    id: 2,
    icon: UserIcon,
    path: "/PatientDash/articles",
    title: "Blogs",
  },
  {
    id: 3,
    icon: UserIcon,
    path: "/PatientDash/coach",
    title: "Coaching",
  },
  {
    id: 4,
    icon: UserIcon,
    path: "/PatientDash/compliment",
    title: "Compliments",
  },
  {
    id: 5,
    icon: UserIcon,
    path: "/PatientDash/inbox",
    title: "Discussion",
  },
  {
    id: 6,
    icon: UserIcon,
    path: "/PatientDash/profile",
    title: "Mon Compte",
  },
];

export default sidebar_menu;
