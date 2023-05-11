import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import consultationSlice from "./consultationSlice/consultationSlice";
import patientDossiersSlice from "./dossierSlice/dossierSlice";
import rendezvous from "./rendezvousSlice/rendezvousSlice";
import articleSlice from "./articleSlice/articleSlice";
import chatSlice from "./chatSlice.js/chatSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    consultation: consultationSlice,
    dossiers: patientDossiersSlice,
    rendezvous: rendezvous,
    articles: articleSlice,
    chat: chatSlice,
  },
});
