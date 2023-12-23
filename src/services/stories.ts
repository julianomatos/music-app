import api from ".";

export const getStories = (token: string | null) => {
    return api.get("/stories", { headers: { Authorization: `Bearer ${token}` } });
  };