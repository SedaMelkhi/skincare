import axios from 'axios';

const API_URL = 'http://fkmva.beget.tech/local/api/';

axios.defaults.baseURL = API_URL;

export const CatalogService = {
  async getCatalog({ type, sectionId, count, itemId }: any): Promise<any> {
    const params = sectionId
      ? {
          type: type,
          sectionId: sectionId,
          count: count,
        }
      : {
          type: type,
          itemId: itemId,
        };
    const { data } = await axios.post<any>('/catalog.php', params);
    return data;
  },
};
