import React from "react";
import "../styles/TermsAndCondition.css";
import Layout from "../components/Layout/Layout";

class TermsAndConditionsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="terms-container">
          <h1 className="terms-title">Terms and Conditions</h1>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingBottom: "129.4118%",
            }}
          >
            <iframe
              title="Embedded Document"
              src=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Layout>
    );
  }
}

export default TermsAndConditionsPage;
