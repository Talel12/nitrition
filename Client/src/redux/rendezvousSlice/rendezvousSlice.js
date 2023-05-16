import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  appointments: [],
  status: "idle",
  error: null,
};

export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async () => {
    const response = await axios.get("http://localhost:5000/rendezvous");
    return response.data;
  }
);

export const addAppointment = createAsyncThunk(
  "appointments/addAppointment",
  async (appointment) => {
    const response = await axios.post(
      "http://localhost:5000/rendezvous",
      appointment
    );
    return response.data;
  }
);

export const updateAppointment = createAsyncThunk(
  "appointments/updateAppointment",
  async (appointment) => {
    console.log(appointment);
    const response = await axios.put(
      `http://localhost:5000/rendezvous/${appointment._id}`,
      appointment
    );
    return response.data;
  }
);

export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (id) => {
    await axios.delete(`http://localhost:5000/rendezvous/${id}`);
    return id;
  }
);

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.appointments.push(action.payload);
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        const index = state.appointments.findIndex(
          (a) => a._id === action.payload._id
        );
        if (index !== -1) {
          state.appointments[index] = action.payload;
        }
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.appointments = state.appointments.filter(
          (a) => a._id !== action.payload
        );
      });
  },
});

export default appointmentsSlice.reducer;

export const selectAllAppointments = (state) => state.appointments.appointments;

export const selectAppointmentById = (state, id) =>
  state.appointments.appointments.find((a) => a._id === id);

export const selectAppointmentsStatus = (state) => state.appointments.status;

export const selectAppointmentsError = (state) => state.appointments.error;
