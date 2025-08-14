import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://sudalgaa.jobs-pwd.gov.mn/api",
  // baseURL: "/api",
});

const ApiService = async (method, url, data, headers = {}, responseType) => {
  const options = {
    method: method,
    url: url,
    ...(responseType && { responseType: responseType }),

    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (method.toLowerCase() === "get") options.params = data;
  else options.data = data;

  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await axiosInstance(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default ApiService;
