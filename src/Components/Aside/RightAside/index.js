import React from 'react';
import './index.css';
//import Avatar from '@material-ui/core/Avatar';
//import firebase from '../../config/firebaseConfig';
//import { useAuthState } from 'react-firebase-hooks/auth';

const AsideRight = () => {
  
  //  const [user, loading, error] = useAuthState(firebase.auth()); //eslint-disable-line

      return (
        <>
          <aside
            className="d-none d-xl-block col-xl-3"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              flex: "0 0 25%",
              maxWidth: "25%",
              display: "block",
            }}
          >
            <div
              className="card div-card mt-2"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.125)",
                borderRadius: "0.25rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                overflowWrap: "break-word",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundClip: "border-box",
                marginTop: "0.5rem",
              }}
            >
              <img
                className="img-aside-right"
                alt="changelog"
                src="../../../Assets/Images/changelog.png"
                style={{
                  boxSizing: "border-box",
                  borderStyle: "none",
                  verticalAlign: "middle",
                  padding: "1rem",
                  borderRadius: "8px",
                }}
              />
              <div
                className="card-body"
                style={{
                  boxSizing: "border-box",
                  flex: "1 1 auto",
                  padding: "1.25rem",
                  minHeight: "1px",
                  paddingTop: "0px",
                }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  New Forem Changelog Entries!
                </p>
                <p
                  className="c-text-color"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    color: "rgb(50, 62, 190)",
                    marginBottom: "0px",
                  }}
                >
                  {'-> "Lock Discussions on Posts"'}
                </p>
                <p
                  className="c-text-color"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    color: "rgb(50, 62, 190)",
                    marginBottom: "0px",
                  }}
                >
                  {'-> "Accessibility Enhancements"'}
                </p>
              </div>
            </div>
            <div
              className="card mt-4"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.125)",
                borderRadius: "0.25rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                overflowWrap: "break-word",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundClip: "border-box",
                marginTop: "1.5rem",
              }}
            >
              <div
                className="card-header font-weight-bold"
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem 1.25rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
                  marginBottom: "0px",
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                  borderRadius: "calc(0.25rem - 1px) calc(0.25rem - 1px) 0px 0px",
                  fontWeight: 700,
                }}
              >
                <h4
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.5rem",
                  }}
                >
                  #news
                </h4>
              </div>
              <ul
                id="newsPost"
                className="list-group list-group-flush"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "0px",
                  marginBottom: "0px",
                  borderRadius: "0px",
                  borderBottom: "inherit",
                  borderBottomWidth: "0px",
                  borderBottomRightRadius: "calc(0.25rem - 1px)",
                  borderBottomLeftRadius: "calc(0.25rem - 1px)",
                  borderTop: "0px",
                }}
              />
            </div>
            <div
              id="help"
              className="card mt-4"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.125)",
                borderRadius: "0.25rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                overflowWrap: "break-word",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundClip: "border-box",
                marginTop: "1.5rem",
              }}
            >
              <div
                className="card-header font-weight-bold"
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem 1.25rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
                  marginBottom: "0px",
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                  borderRadius: "calc(0.25rem - 1px) calc(0.25rem - 1px) 0px 0px",
                  fontWeight: 700,
                }}
              >
                <h4
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.5rem",
                  }}
                >
                  #help
                </h4>
              </div>
              <ul
                id="helpPost"
                className="list-group list-group-flush"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "0px",
                  marginBottom: "0px",
                  borderRadius: "0px",
                  borderBottom: "inherit",
                  borderBottomWidth: "0px",
                  borderBottomRightRadius: "calc(0.25rem - 1px)",
                  borderBottomLeftRadius: "calc(0.25rem - 1px)",
                  borderTop: "0px",
                }}
              />
            </div>
            <div
              className="card mt-4"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.125)",
                borderRadius: "0.25rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                overflowWrap: "break-word",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundClip: "border-box",
                marginTop: "1.5rem",
              }}
            >
              <div
                className="card-header font-weight-bold"
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem 1.25rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
                  marginBottom: "0px",
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                  borderRadius: "calc(0.25rem - 1px) calc(0.25rem - 1px) 0px 0px",
                  fontWeight: 700,
                }}
              >
                <h4
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.5rem",
                  }}
                >
                  #discuss
                </h4>
              </div>
              <ul
                className="list-group list-group-flush"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "0px",
                  marginBottom: "0px",
                  borderRadius: "0px",
                  borderBottom: "inherit",
                  borderBottomWidth: "0px",
                  borderBottomRightRadius: "calc(0.25rem - 1px)",
                  borderBottomLeftRadius: "calc(0.25rem - 1px)",
                  borderTop: "0px",
                }}
              >
                <li
                  className="list-group-item"
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem 1.25rem",
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    position: "relative",
                    display: "block",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit",
                    borderWidth: "0px 0px 1px",
                  }}
                >
                  {"ALPHA REACT 18 HAS ARRIVED"}
                  <div style={{ boxSizing: "border-box" }}>
                    <button
                      className="btn-new"
                      type="button bg-primary"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        appearance: "button",
                        borderRadius: "8px",
                        backgroundColor: "rgb(50, 62, 190)",
                        width: "53px",
                        marginLeft: "0px",
                        marginTop: "0.5em",
                        color: "white",
                        fontSize: "small",
                        cursor: "pointer",
                      }}
                    >
                      New
                    </button>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem 1.25rem",
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    position: "relative",
                    display: "block",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderWidth: "0px 0px 1px",
                    borderTopWidth: "0px",
                  }}
                >
                  {"Should You Really be Coding in Dark Mode?"}
                  <div style={{ boxSizing: "border-box" }}>
                    <p
                      className="text-muted l-text"
                      style={{
                        boxSizing: "border-box",
                        marginBottom: "1rem",
                        marginTop: "0.3em",
                        fontSize: "small",
                        color: "rgb(108, 117, 125)",
                      }}
                    >
                      11 comments
                    </p>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem 1.25rem",
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    position: "relative",
                    display: "block",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderWidth: "0px 0px 1px",
                    borderTopWidth: "0px",
                  }}
                >
                  {"What was your win this week0?"}
                  <div style={{ boxSizing: "border-box" }}>
                    <p
                      className="text-muted l-text"
                      style={{
                        boxSizing: "border-box",
                        marginBottom: "1rem",
                        marginTop: "0.3em",
                        fontSize: "small",
                        color: "rgb(108, 117, 125)",
                      }}
                    >
                      10 comments
                    </p>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem 1.25rem",
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    position: "relative",
                    display: "block",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderWidth: "0px 0px 1px",
                    borderTopWidth: "0px",
                  }}
                >
                  {"How I got 1000 followers on DEV"}
                  <div style={{ boxSizing: "border-box" }}>
                    <p
                      className="text-muted l-text"
                      style={{
                        boxSizing: "border-box",
                        marginBottom: "1rem",
                        marginTop: "0.3em",
                        fontSize: "small",
                        color: "rgb(108, 117, 125)",
                      }}
                    >
                      4 comments
                    </p>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem 1.25rem",
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    position: "relative",
                    display: "block",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderBottomRightRadius: "inherit",
                    borderBottomLeftRadius: "inherit",
                    borderWidth: "0px 0px 1px",
                    borderTopWidth: "0px",
                    borderBottomWidth: "0px",
                  }}
                >
                  {`How do you stay up to date with the latest developments
                                in tech?`}
                  <div style={{ boxSizing: "border-box" }}>
                    <p
                      className="text-muted l-text"
                      style={{
                        boxSizing: "border-box",
                        marginBottom: "1rem",
                        marginTop: "0.3em",
                        fontSize: "small",
                        color: "rgb(108, 117, 125)",
                      }}
                    >
                      35 comments
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </>
      );
    }
    
};

export default AsideRight;
