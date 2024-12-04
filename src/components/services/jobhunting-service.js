import axiosInstance from "./AxiosInstance";
const reqEncryption = import.meta.env.VITE_REQ_ENCRYPTION === "true";

export const getJobs = async (data) => {
  try {
    let url = "JobHunting/GetJobs?";
    
    if (reqEncryption && data?.enData) {
      url += `data=${data.enData}&`;
    } else {
      if (data?.jobId) {
        url += `jobId=${data.jobId}&`;
      }
      if (data?.id) {
        url += `Id=${data.id}&`;
      }
      if (data?.statusId) {
        url += `StatusId=${data.statusId}&`;
      }
      if (data?.name) {
        url += `Name=${data.name}&`;
      }
      if (data?.orderBy) {
        url += `OrderBy=${data.orderBy}&`;
      }
      if (data?.pageNumber) {
        url += `pageNumber=${data.pageNumber}&`;
      }
      if (data?.pageSize) {
        url += `pageSize=${data.pageSize}&`;
      }
      if (data.PostTitle) {
        url += `PostTitle=${data.PostTitle}&`;
    }
    }
    // url += 'IsActive=true'
    url = url.replace(/&$/, "");  
    const response = await axiosInstance.get(url);
    return response?.data;
  } catch (error) {
    console.error("Error fetching jobs:", JSON.stringify(error));
    throw error;
  }
};

// export const addJob = async (data) => {
//   try {
//     const response = await axiosInstance.post("JobHunting/AddJob", data);
//     return response;
//   } catch (error) {
//     console.error("Error adding job:", JSON.stringify(error));
//     throw error;
//   }
// };

// export const updateJob = async (data) => {
//   try {
//     const response = await axiosInstance.put(
//       `JobHunting/UpdateJob/${data.id}`,
//       data
//     );
//     return response;
//   } catch (error) {
//     console.error("Error updating job:", JSON.stringify(error));
//     throw error;
//   }
// };

// export const deleteJob = async (id) => {
//   try {
//     const response = await axiosInstance.delete(`JobHunting/DeleteJob/${id}`);
//     return response;
//   } catch (error) {
//     console.error("Error deleting job:", JSON.stringify(error));
//     throw error;
//   }
// };

// export const updateJobStatus = async (data) => {
//   try {
//     const response = await axiosInstance.put(
//       `JobHunting/Status/${data.id}/${data.statusId}`
//     );
//     return response;
//   } catch (error) {
//     console.error("Error updating job status:", JSON.stringify(error));
//     throw error;
//   }
// };
