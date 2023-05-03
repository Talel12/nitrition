import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  patientDossiers: [],
  status: "idle",
  error: null,
  currentPatientDossier: null,
};

export const fetchPatientDossiers = createAsyncThunk(
  "patientDossiers/fetchPatientDossiers",
  async () => {
    const response = await axios.get("http://localhost:5000/dossier");
    return response.data;
  }
);

export const addNewPatientDossier = createAsyncThunk(
  "patientDossiers/addNewPatientDossier",
  async (patientDossier) => {
    const response = await axios.post("http://localhost:5000/dossier", patientDossier);
    return response.data;
  }
);

export const updatePatientDossier = createAsyncThunk(
  "patientDossiers/updatePatientDossier",
  async (patientDossier) => {
    const response = await axios.patch(
      `http://localhost:5000/dossier/${patientDossier._id}`,
      patientDossier
    );
    return response.data;
  }
);

export const deletePatientDossier = createAsyncThunk(
  "patientDossiers/deletePatientDossier",
  async (patientDossierId) => {
    await axios.delete(`http://localhost:5000/dossier/${patientDossierId}`);
    return patientDossierId;
  }
);

const patientDossiersSlice = createSlice({
  name: "patientDossiers",
  initialState,
  reducers: {
    setCurrentPatientDossier: (state, action) => {
      state.currentPatientDossier = action.payload;
    },
  },
  extraReducers: {
    [fetchPatientDossiers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPatientDossiers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.patientDossiers = state.patientDossiers.concat(action.payload);
    },
    [fetchPatientDossiers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addNewPatientDossier.fulfilled]: (state, action) => {
      state.patientDossiers.push(action.payload);
    },
    [updatePatientDossier.fulfilled]: (state, action) => {
      const { _id, patient, consultations, NCarnet, notes } = action.payload;
      const existingPatientDossier = state.patientDossiers.find(
        (patientDossier) => patientDossier._id === _id
      );
      if (existingPatientDossier) {
        existingPatientDossier.patient = patient;
        existingPatientDossier.consultations = consultations;
        existingPatientDossier.NCarnet = NCarnet;
        existingPatientDossier.notes = notes;
      }
    },
    [deletePatientDossier.fulfilled]: (state, action) => {
      const patientDossierId = action.payload;
      state.patientDossiers = state.patientDossiers.filter(
        (patientDossier) => patientDossier._id !== patientDossierId
      );
    },
  },
});

export const { setCurrentPatientDossier } = patientDossiersSlice.actions;

export default patientDossiersSlice.reducer;
