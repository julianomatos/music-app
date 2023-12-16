import api from ".";

export const getAlbums = (token: string | null) => {
    return api.get("/albums", { headers: { Authorization: `Bearer ${token}` } });
  };