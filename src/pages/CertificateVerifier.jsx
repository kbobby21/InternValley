import React, { useState } from 'react';
import Layout from "../components/Layout/Layout";
import { verifyCertificate } from "../service/Apis";
import { formatDate } from "../service/helper"; 
import '../styles/CertificateVerifier.css';
import Spinner from '../components/Spinner';

function CertificateVerifier() {
  const [certificateId, setCertificateId] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [verificationResult, setVerificationResult] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleVerify = async () => {
    setLoading(true); 

    const { data, success, error } = await verifyCertificate(certificateId);
    
    setLoading(false); 

    if (success) {
      if (data) {
        setStudentData(data);
        setVerificationResult(<span className='verified'><i className="fas fa-check-circle"></i> Certificate Verified!</span>);
      } else {
        setStudentData(null);
        setVerificationResult('Certificate not found. Please enter a valid ID.');
      }
    } else {
      setVerificationResult(error || 'Error verifying certificate. Please try again later.');
    }
  };

  const handleDownload = () => {
    // Trigger the download action
    if (studentData && studentData.LINK) {
      window.open(studentData.LINK, '_blank');
    }
  };

  return (
    <Layout>
      <div className='certificate-verify-container'>
        <h2>Verify Your Certification ID</h2>
        <div className='verify-container'>
          <div className='input-container'>
            <input
              type="text"
              placeholder="Enter Certificate ID"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
            />
          </div>
          <div className='button-container'>
            <button onClick={handleVerify}>Verify </button>
          </div>
        </div>
        <div className='Loader'>{loading && <Spinner />}</div>
        {/* Show verification result */}
        {verificationResult && <div className='result-container'><p>{verificationResult}</p></div>}
        
        {/* Show student data if available */}
        {studentData && (
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>CERTIFICATE ID</th>
                  <th>NAME</th>
                  <th>DOMAIN</th>
                  <th>DURATION</th>
                  <th>DATE OF JOINING</th>
                  <th>DATE OF COMPLETION</th>
                  <th>DOWNLOAD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{studentData.CERTIFICATION_ID}</td>
                  <td>{studentData.NAME}</td>
                  <td>{studentData.DOMAIN}</td>
                  <td>{studentData.DURATION}</td>
                  <td>{formatDate(studentData.DATE_OF_JOINING)}</td>
                  <td>{formatDate(studentData.COMPLETION_DATE)}</td>
                  <td>
                    <button onClick={handleDownload}>Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default CertificateVerifier;
