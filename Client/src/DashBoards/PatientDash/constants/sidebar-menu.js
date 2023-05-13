import DocumentsIcon from "../assets/icons/documents.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import UserIcon from "../assets/icons/user.svg";
import DiscussionIcon from "../assets/icons/discussion-white.svg";
import FitIcon from "../assets/icons/fit.svg";
import CompIcon from "../assets/icons/comp.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: CalendarIcon,
    path: "/PatientDash/rendezvous",
    title: "Rendez-vous",
  },
  {
    id: 2,
    icon: DocumentsIcon,
    path: "/PatientDash/articles",
    title: "Blogs",
  },
  {
    id: 3,
    icon: FitIcon,
    path: "/PatientDash/coach",
    title: "Coaching",
  },
  {
    id: 4,
    icon: CompIcon,
    path: "/PatientDash/compliment",
    title: "Compliments",
  },
  {
    id: 5,
    icon: DiscussionIcon,
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
