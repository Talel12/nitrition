import React, { useState, useEffect } from "react";
import AssistanteDashHeader from "../../components/AssistanteDashHeader/AssistanteDashHeader";

import all_orders from "../../constants/orders";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "../AssPagesStyles.css";
import Kalend, { CalendarView } from "kalend";
import { useSelector } from "react-redux";
import UpdateApointmentModal from "../../components/UpdateApointmentModal";

function Rendezvous() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const events = useSelector((store) => store?.rendezvous?.appointments);
  const [currentAppointment, setCurrentAppointment] = useState(
    events[0] || null
  );
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState(all_orders);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    setPagination(calculateRange(all_orders, 5));
    setOrders(sliceData(all_orders, page, 5));
  }, [page]);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = orders.filter(
        (item) =>
          item.first_name.toLowerCase().includes(search.toLowerCase()) ||
          item.last_name.toLowerCase().includes(search.toLowerCase()) ||
          item.product.toLowerCase().includes(search.toLowerCase())
      );
      setOrders(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setOrders(sliceData(all_orders, new_page, 5));
  };

  const onEventClickHandler = (data) => {
    setCurrentAppointment(data);
    setShowEditModal(true);
  };

  const onNewEventClickHandler = () => {
    setShowAddModal(true);
  };

  return showEditModal ? (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UpdateApointmentModal
        setShowEditModal={setShowEditModal}
        currentAppointment={currentAppointment}
      />
    </div>
  ) : (
    <div className="AssistanteDash-content">
      <AssistanteDashHeader
        btnText="Ajouter un rendez-vous"
        eventTitle={"appointment"}
      />
      <div style={{ height: "85vh" }}>
        <Kalend
          autoScroll={true}
          showTimeLine={true}
          onEventClick={onEventClickHandler}
          onNewEventClick={onNewEventClickHandler}
          events={events}
          initialDate={new Date().toISOString()}
          hourHeight={300}
          initialView={CalendarView.WEEK}
          disabledViews={[CalendarView.DAY]}
          timeFormat={"24"}
          weekDayStart={"Monday"}
          calendarIDsHidden={["work"]}
          language={"fr"}
        />
      </div>
    </div>
  );
}

export default Rendezvous;
