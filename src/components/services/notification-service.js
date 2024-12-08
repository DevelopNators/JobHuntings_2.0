// import { Controllers } from "../enums/Controllers";
import axiosInstance from "./AxiosInstance";
import cryptoService from "./CryptoService";
const reqEncrpytion = import.meta.env.VITE_REQ_ENCRYPTION;
const controller = "Notification";

export async function subscribeToTopics(topics) {
  const tokenData = localStorage.getItem("fcm");
  if (!tokenData) {
    return null;
  }
  try {
    var data = cryptoService.encryptForUri({
      topics: topics,
      token: tokenData,
    });
    const response = await axiosInstance.get(
      `${controller}/subscribe?data=${data}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
}

export const getAllNotification = async (data) => {
  try {
    let url = `${controller}/GetAll?`;
    if (reqEncrpytion) {
      if (data?.enData) {
        url += `data=${data?.enData}&`;
      }
    } else {
      if (data?.id) {
        url += `/${data.Id}?`;
      }

      if (data?.statusId) {
        url += `StatusId=${data?.statusId}&`;
      }
      if (data?.name) {
        url += `Name=${data?.name}&`;
      }
      if (data?.orderBy) {
        url += `OrderBy=${data?.orderBy}&`;
      }
      if (data?.pageNumber) {
        url += `pageNumber=${data?.pageNumber}&`;
      }
      if (data?.pageSize) {
        url += `pageSize=${data?.pageSize}&`;
      }
    }
    url = url.replace(/&$/, "");
    const response = await axiosInstance.get(url);
    return response?.data;
  } catch (error) {
    console.error("Error fetching category", JSON.stringify(error));
    throw error;
  }
};

export const getNotification = async (data) => {
  try {
    const response = await axiosInstance.get(`${controller}/Get/${data.id}`);
    return response;
  } catch (error) {
    console.error("Error adding company", JSON.stringify(error));
    throw error;
  }
};

export const addNotification = async (data) => {
  try {
    const response = await axiosInstance.post(`${controller}/Add`, data);
    return response;
  } catch (error) {
    console.error("Error adding company", JSON.stringify(error));
    throw error;
  }
};

export const updateNotification = async (data) => {
  try {
    const response = await axiosInstance.put(
      `${controller}/Update/${data.id}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error adding company", JSON.stringify(error));
    throw error;
  }
};

export const popNotification = async (data) => {
  try {
    const response = await axiosInstance.delete(
      `${controller}/Pop/${data.id}`,
      {}
    );
    return response;
  } catch (error) {
    console.error("Error adding company", JSON.stringify(error));
    throw error;
  }
};

export const pushNotification = async (data) => {
  try {
    const response = await axiosInstance.put(
      `${controller}/Push/${data.id}`,
      {}
    );
    return response;
  } catch (error) {
    console.error("Error adding company", JSON.stringify(error));
    throw error;
  }
};
