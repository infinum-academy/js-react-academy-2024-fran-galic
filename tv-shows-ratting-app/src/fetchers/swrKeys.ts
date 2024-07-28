const apiUrl = "https://tv-shows.infinum.academy";
export const swrKeys = {
  register: `${apiUrl}/users`,
  signIn: `${apiUrl}/users/sign_in`,
  shows: `${apiUrl}/shows`,
  top_rated_shows: `${apiUrl}/shows/top_rated`,
  specificShow: (id: string) => {
    return `${swrKeys.shows}/${id}`
  },
  showsPageItems: (page: number, items: number) => {
    const queryParams = {
      page: page.toString(),
      items: items.toString(),
    };
    const urlParams = new URLSearchParams(queryParams);
    const urlWithParams = `${swrKeys.shows}?${urlParams.toString()}`;
    return urlWithParams;
  }, 
  topRatedPageItems: (page: number, items: number) => {
    const queryParams = {
      page: page.toString(),
      items: items.toString(),
    };
    const urlParams = new URLSearchParams(queryParams);
    const urlWithParams = `${swrKeys.top_rated_shows}?${urlParams.toString()}`;
    return urlWithParams;
  } 
};