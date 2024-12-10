import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

const JoblyApi = {
  // Example method to get companies
  getCompanies: async () => {
    const response = await axios.get(`${BASE_URL}/companies`);
    return response.data;
  },

  // Example method to get a specific company by ID
  getCompany: async (id) => {
    const response = await axios.get(`${BASE_URL}/companies/${id}`);
    return response.data;
  },

  // Example method to create a new job application
  applyToJob: async (jobId, applicationData) => {
    const response = await axios.post(`${BASE_URL}/jobs/${jobId}/apply`, applicationData);
    return response.data;
  },

  // Add other API methods as needed
};

export default JoblyApi;
