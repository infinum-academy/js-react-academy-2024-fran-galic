const apiUrl = "https://tv-shows.infinum.academy";
export const swrKeys = {
  register: `${apiUrl}/users`,
  signIn: `${apiUrl}/users/sign_in`,
  shows: `${apiUrl}/shows`,
  top_rated_shows: `${apiUrl}/shows/top_rated`,
  showsPageItems: (page: number, items: number) => {
    const queryParams = {
      page: page.toString(),
      items: items.toString(),
    };
    const urlParams = new URLSearchParams(queryParams);
    const urlWithParams = `${swrKeys.shows}?${urlParams.toString()}`;
    return urlWithParams;
  } 
};