import React, { useState, useEffect } from "react";
// import AssistanteDashHeader from "../../components/AssistanteDashHeader/AssistanteDashHeader";

import all_orders from "../../constants/orders";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "../MedPagesStyles.css";
import DoneIcon from "../../assets/icons/done.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import RefundedIcon from "../../assets/icons/refunded.svg";
import Kalend, { CalendarView } from "kalend";
import { useSelector } from "react-redux";
import MedcineDashHeader from "../../components/MedcineDashHeader/MedcineDashHeader";
import UpdateApointmentModal from "../../../AssistanteDash/components/UpdateApointmentModal";
import AddApointmentModal from "../../../AssistanteDash/components/AddApointmentModal";

function Rendezvous() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const events = useSelector((store) => store.rendezvous.appointments);
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState(all_orders);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const [currentAppointment, setCurrentAppointment] = useState(
    events[0] || null
  );

  useEffect(() => {
    setPagination(calculateRange(all_orders, 5));
    setOrders(sliceData(all_orders, page, 5));
  }, []);

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

  //   const events = [
  //     {
  //         id: 1,
  //         startAt: '2023-04-23T18:00:00.000Z',
  //         endAt: '2023-04-23T19:00:00.000Z',
  //         timezoneStartAt: 'Europe/Berlin', // optional
  //         summary: 'test',
  //         color: 'blue',
  //         calendarID: 'work'
  //     },
  //     {
  //         id: 2,
  //         startAt: '2023-04-23T15:00:00.000Z',
  //         endAt: '2023-04-23T16:30:00.000Z',
  //         timezoneStartAt: 'Europe/Berlin', // optional
  //         summary: 'test',
  //         color: 'blue'
  //     }
  // ]

  return showEditModal ? (
    <div style={{ width: "100vw", height: "100vh" }}>
      <UpdateApointmentModal
        setShowEditModal={setShowEditModal}
        currentAppointment={currentAppointment}
      />
    </div>
  ) : showAddModal ? (
    <div
      style={{ width: "100vw", height: "100vh", display: "flex", padding: 80 }}
    >
      <AddApointmentModal setShowAddModal={setShowAddModal} />
    </div>
  ) : (
    <div className="AssistanteDash-content">
      <MedcineDashHeader
        btnText="Ajouter un rendez-vous"
        eventTitle={"appointment"}
      />

      <div className="AssistanteDash-content-container">
        <div className="AssistanteDash-content-header">
          <h2>Rendez-Vous </h2>
          <div className="AssistanteDash-content-search">
            <input
              type="text"
              value={search}
              placeholder="Rechercher..."
              className="AssistanteDash-content-input"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            {/* <th>ID</th> */}
            <th>PATIENT</th>
            <th>DATE</th>
            <th>L'HEURE</th>
            <th>STATUS</th>
            {/* <th>REVENUE</th> */}
          </thead>

          {events.length !== 0 ? (
            <tbody>
              {events.map((order, index) => (
                <tr key={index}>
                  <td>
                    <div>
                      <img
                        src={order?.patient?.img}
                        className="AssistanteDash-content-avatar"
                        alt={
                          order?.patient?.name + " " + order?.patient?.LastName
                        }
                      />
                      <span>
                        {order?.patient?.name} {order?.patient?.LastName}
                      </span>
                    </div>
                  </td>
                  {/* <td>
                    <span>{order._id}</span>
                  </td> */}
                  <td>
                    <span>{order?.startAt?.slice(0, 10)}</span>
                  </td>
                  <td>
                    <span>{order?.startAt?.slice(11, 16)}</span>
                  </td>

                  <td>
                    <div>
                      {order.status === "Scheduled" ? (
                        <img
                          src={RefundedIcon}
                          alt="paid-icon"
                          className="AssistanteDash-content-icon"
                        />
                      ) : order.status === "Cancelled" ? (
                        <img
                          src={CancelIcon}
                          alt="canceled-icon"
                          className="AssistanteDash-content-icon"
                        />
                      ) : order.status === "Accepted" ? (
                        <img
                          src={DoneIcon}
                          alt="refunded-icon"
                          className="AssistanteDash-content-icon"
                        />
                      ) : null}
                      <span>
                        {order.status === "Scheduled"
                          ? "En Cours"
                          : order.status === "Cancelled"
                          ? "Refuser"
                          : "Confirmer"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {orders.length !== 0 ? (
          <div className="AssistanteDash-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="AssistanteDash-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
      </div>
      <div style={{ height: "100vh" }}>
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
          // onSelectView={onSelectView}
          // selectedView={selectedView}
          // onPageChange={onPageChange}
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
