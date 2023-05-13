import PatientsIcon from "../assets/icons/patients.svg";
import DocumentsIcon from "../assets/icons/documents.svg";
import CalendarIcon from "../assets/icons/calendar.svg";

import UserIcon from "../assets/icons/user.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: PatientsIcon,
    path: "/AssistanteDash/patients",
    title: "Patients",
  },
  {
    id: 2,
    icon: DocumentsIcon,
    path: "/AssistanteDash/blog",
    title: "Blog",
  },
  {
    id: 3,
    icon: CalendarIcon,
    path: "/AssistanteDash/rendezvous",
    title: "Rendez-vous",
  },
  {
    id: 5,
    icon: UserIcon,
    path: "/AssistanteDash/profile",
    title: "My account",
  },
];

export default sidebar_menu;
