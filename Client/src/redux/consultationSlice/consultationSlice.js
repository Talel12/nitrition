import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  consultations: [],
  status: "idle",
  error: null,
  patientConsultation: {},
};

export const fetchConsultations = createAsyncThunk(
  "consultations/fetchConsultations",
  async () => {
    const response = await axios.get("http://localhost:5000/consultation");
    return response.data;
  }
);

export const fetchConsultationbyID = createAsyncThunk(
  "consultations/fetchConsultationbyID",
  async (ids) => {
    const response = await axios.get(
      `http://localhost:5000/consultation/${ids}`
    );
    return response.data;
  }
);

export const addConsultation = createAsyncThunk(
  "consultations/addConsultation",
  async (consultation) => {
    const response = await axios.post(
      "http://localhost:5000/consultation",
      consultation
    );
    return response.data;
  }
);

export const updateConsultation = createAsyncThunk(
  "consultations/updateConsultation",
  async (consultation) => {
    const response = await axios.patch(
      `http://localhost:5000/consultation/${consultation._id}`,
      consultation
    );
    return response.data;
  }
);

export const deleteConsultation = createAsyncThunk(
  "consultations/deleteConsultation",
  async (consultationId) => {
    await axios.delete(`http://localhost:5000/consultation/${consultationId}`);
    return consultationId;
  }
);

const consultationsSlice = createSlice({
  name: "consultations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConsultations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConsultations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.consultations = action.payload;
      })
      .addCase(fetchConsultations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchConsultationbyID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConsultationbyID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patientConsultation = action.payload;
      })
      .addCase(fetchConsultationbyID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addConsultation.fulfilled, (state, action) => {
        state.consultations.push(action.payload);
      })
      .addCase(updateConsultation.fulfilled, (state, action) => {
        const index = state.consultations.findIndex(
          (c) => c._id === action.payload._id
        );
        if (index !== -1) {
          state.consultations[index] = action.payload;
        }
      })
      .addCase(deleteConsultation.fulfilled, (state, action) => {
        const index = state.consultations.findIndex(
          (c) => c._id === action.payload
        );
        if (index !== -1) {
          state.consultations.splice(index, 1);
        }
      });
  },
});

export default consultationsSlice.reducer;
