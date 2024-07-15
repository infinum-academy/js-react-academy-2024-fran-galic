
export async function mutator<T>(url: string, { arg }: { arg: T }) {
   try {
     const options = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(arg),
     };
 
     const response = await fetch(url, options);
 
     if (!response.ok) {
       alert("Wrong email or password, please try again.");
       throw new Error(`An error occurred while trying to mutate the url: ${url}`);
     }
 
     //parsiramo i stavrmao objekt podataka iz tijela HTTP odgovora
     const data = await response.json();
     console.log("Podaci iz tijela: ", data);
 
     const headers = {
       accessToken: response.headers.get('access-token'),
       client: response.headers.get('client'),
       tokenType: response.headers.get('token-type'),
       expiry: response.headers.get('expiry'),
       uid: response.headers.get('uid'),
     };
     console.log("Podaci iz Headera: ", headers);

     return {
       data: data,
       headers: JSON.stringify(headers),
     };
   } catch (error) {
     console.error('Error:', error);
     throw error;
   }
 }