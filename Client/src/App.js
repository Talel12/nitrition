import React, { useEffect, useState } from "react";
import "./styles/App.css";
import aos from "aos";
import "aos/dist/aos.css";
import "kalend/dist/styles/index.css";
import "react-datalist-input/dist/styles.css";

import { Route, Routes } from "react-router-dom/dist";
import Home from "./pages/Home";
import Signup from "./pages/Connexion/Signup";

import Contact from "./pages/Contact";
import { useDispatch } from "react-redux";
import { getAllUsers, userCurrent } from "./redux/userSlice/userSlice";

import Switcher from "./pages/Switcher";

import MedcineDash from "./DashBoards/MedcineDash/MedcineDash";
import AssistanteDash from "./DashBoards/AssistanteDash/AssistanteDash";
import PatientDash from "./DashBoards/PatientDash/PatientDash";

import PrivateRoute from "./route/PrivateRoute";

import MedcineUsers from "./DashBoards/MedcineDash/pages/Users/Users";
import MedcineDossier from "./DashBoards/MedcineDash/pages/Dossier/Dossier";
import MedcinePatients from "./DashBoards/MedcineDash/pages/Patients/Patients";
import MedcineRendezvous from "./DashBoards/MedcineDash/pages/Rendezvous/Rendezvous";
import MedcineProfile from "./DashBoards/MedcineDash/pages/Profile/Profile";
import MedcineArticles from "./DashBoards/MedcineDash/pages/Articles/Articles";
import MedcineDiscussion from "./DashBoards/MedcineDash/pages/Discussion/Discussion";

import AssistanteDossier from "./DashBoards/AssistanteDash/pages/Dossier/Dossier";
import AssistantePatients from "./DashBoards/AssistanteDash/pages/Patients/Patients";
import AssistanteRendezvous from "./DashBoards/AssistanteDash/pages/Rendezvous/Rendezvous";
import AssistanteProfile from "./DashBoards/AssistanteDash/pages/Profile/Profile";

import PatientRendezvous from "./DashBoards/PatientDash/pages/Rendezvous/Rendezvous";
import PatientProfile from "./DashBoards/PatientDash/pages/Profile/Profile";
import PatientCoach from "./DashBoards/PatientDash/pages/Coach/PatientCoach";
import PatientArticles from "./DashBoards/PatientDash/pages/Articles/PatientArticles";
import PatientInbox from "./DashBoards/PatientDash/pages/Inbox/Inbox";
import PatientCompliment from "./DashBoards/PatientDash/pages/Compliment/Compliment";

import P404 from "./pages/404";

import { fetchAppointments } from "./redux/rendezvousSlice/rendezvousSlice";
import { fetchConsultations } from "./redux/consultationSlice/consultationSlice";
import { fetchPatientDossiers } from "./redux/dossierSlice/dossierSlice";

function App() {
  const [ping, setPing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(userCurrent());
    dispatch(fetchAppointments());
    dispatch(fetchConsultations());
    dispatch(fetchPatientDossiers());
  }, [ping, dispatch]);

  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<P404 />} />

        <Route path="/" element={<Home />} />
        <Route path="/switch" element={<Switcher />} />
        <Route
          path="/switch/patient"
          element={<PatientDash ping={ping} setPing={setPing} />}
        />
        <Route
          path="/switch/medecin"
          element={<MedcineDash ping={ping} setPing={setPing} />}
        />
        <Route
          path="/switch/assistante"
          element={<AssistanteDash ping={ping} setPing={setPing} />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/medcinedash" element={<MedcineDash />}>
            <Route path="*" element={<P404 />} />
            <Route exact path="/medcinedash/" element={<MedcinePatients />} />
            <Route exact path="/medcinedash/users" element={<MedcineUsers />} />
            <Route
              exact
              path="/medcinedash/dossier"
              element={<MedcineDossier />}
            />
            <Route
              exact
              path="/medcinedash/patients"
              element={<MedcinePatients />}
            />
            <Route
              exact
              path="/medcinedash/rendezvous"
              element={<MedcineRendezvous />}
            />
            <Route
              exact
              path="/medcinedash/profile"
              element={<MedcineProfile />}
            />
            <Route
              exact
              path="/medcinedash/Articles"
              element={<MedcineArticles />}
            />
            <Route
              exact
              path="/medcinedash/discussion"
              element={<MedcineDiscussion />}
            />
          </Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/assistantedash" element={<AssistanteDash />}>
            <Route path="*" element={<P404 />} />
            <Route
              exact
              path="/assistantedash/"
              element={<AssistantePatients />}
            />
            <Route
              exact
              path="/assistantedash/dossier"
              element={<AssistanteDossier />}
            />
            <Route
              exact
              path="/assistantedash/patients"
              element={<AssistantePatients />}
            />
            <Route
              exact
              path="/assistantedash/rendezvous"
              element={<AssistanteRendezvous />}
            />
            <Route
              exact
              path="/assistantedash/profile"
              element={<AssistanteProfile />}
            />
          </Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/patientdash" element={<PatientDash />}>
            <Route path="*" element={<P404 />} />
            <Route exact path="/patientdash/" element={<PatientRendezvous />} />
            <Route
              exact
              path="/patientdash/rendezvous"
              element={<PatientRendezvous />}
            />
            <Route
              exact
              path="/patientdash/profile"
              element={<PatientProfile />}
            />
            <Route exact path="/patientdash/coach" element={<PatientCoach />} />
            <Route exact path="/patientdash/inbox" element={<PatientInbox />} />
            <Route
              exact
              path="/patientdash/compliment"
              element={<PatientCompliment />}
            />
            <Route
              exact
              path="/patientdash/articles"
              element={<PatientArticles />}
            />
          </Route>
        </Route>

        <Route
          path="/signin"
          element={<Signup ping={ping} setPing={setPing} />}
        />
        <Route
          path="/signup"
          element={<Signup ping={ping} setPing={setPing} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

export const refresh = () => {
  window.location.reload();
};
