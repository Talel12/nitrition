import React from "react";
import "../../../MedcineDash/pages/Discussion/discussion.css";
import LogoutIcon from "../../assets/icons/logout.svg";

const Inbox = () => {
  return (
    <div className="discussion-container">
      <div className="conversation-list">
        <div className="conversation-item">
          <img
            alt="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vwjkkw0iJF-aZKBK1irbpORkU93ttSaVXA&usqp=CAU"
          />
          <div>
            <h4>Foulen Foulani</h4>
            <span>Hadha A5er message</span>
          </div>
        </div>
        <div className="conversation-item">
          <img
            alt="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vwjkkw0iJF-aZKBK1irbpORkU93ttSaVXA&usqp=CAU"
          />
          <div>
            <h4>Foulen Foulani</h4>
            <span>Hadha A5er message</span>
          </div>
        </div>
        <div className="conversation-item">
          <img
            alt="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vwjkkw0iJF-aZKBK1irbpORkU93ttSaVXA&usqp=CAU"
          />
          <div>
            <h4>Foulen Foulani</h4>
            <span>Hadha A5er message</span>
          </div>
        </div>
        <div className="conversation-item">
          <img
            alt="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vwjkkw0iJF-aZKBK1irbpORkU93ttSaVXA&usqp=CAU"
          />
          <div>
            <h4>Foulen Foulani</h4>
            <span>Hadha A5er message</span>
          </div>
        </div>
      </div>
      <div className="conversation-container">
        <div className="conversation-view"></div>
        <div className="conversation-input">
          <input
            style={{ width: "100%", maxWidth: "100%" }}
            type={"text"}
            placeholder="votre message"
          />
          <div
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#2da1ea",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <img
              src={LogoutIcon}
              alt="icon-logout"
              className="Medcine-Sidebar-item-icon"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
