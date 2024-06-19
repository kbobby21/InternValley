import { BACKEND_URL } from "./helper";

export const verifyCertificate = async (certificateId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/userdata?CERTIFICATION_ID=${certificateId}`);
    const data = await response.json();
    return { data, success: response.ok };
  } catch (error) {
    console.error('Error verifying certificate:', error);
    return { error: 'Error verifying certificate. Please try again later.' };
  }
};
