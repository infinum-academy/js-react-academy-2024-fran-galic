

export async function getSignInMutator<T>(url: string, { arg }: { arg: T }) {
   // Prvo, dohvaćam zaglavlja iz localStorage
   const headerJSON = localStorage.getItem('userHeaders');
   if (!headerJSON) {
     throw new Error('Problem pri pristupu korisnickim podacima');
   }
 
   // Parsiram JSON iz localStorage da dobijem zaglavlja kao objekt
   const header = JSON.parse(headerJSON);
 
   // Ispisujem zaglavlja u konzolu da vidim jesu li ispravno učitana
   console.log('Učitana zaglavlja:', header);
 
   // Pripremam opcije za fetch zahtjev
   const options = {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json',
       'access-token': header.accessToken,
       client: header.client,
       'token-type': header.tokenType,
       uid: header.uid,
       expiry: header.expiry,
     },
   };
 
   // Šaljem fetch zahtjev i čekam odgovor
   const response = await fetch(url, options);
 
   // Provjeravam je li odgovor OK, ako nije, bacam grešku
   if (!response.ok) {
     throw new Error(`Dogodila se greška kod dohvaćanja podataka s: ${url}`);
   }
 
   // Parsiram tijelo odgovora kao JSON
   const responseData = await response.json();
   console.log('Podaci iz odgovora:', responseData);
 
   //potenicjanlo cu zadnja dva bloka koda zakomentirat ako nije potrebno
   // Dohvaćam nove vrijednosti zaglavlja iz odgovora (ako postoje)
   const newAccessToken = response.headers.get('access-token');
   const newClient = response.headers.get('client');
   const newTokenType = response.headers.get('token-type');
 
   // Ažuriram localStorage s novim zaglavljima ako su se promijenila
   localStorage.setItem('userHeaders', JSON.stringify({
     accessToken: newAccessToken,
     client: newClient,
     tokenType: newTokenType,
     uid: header.uid,
     expiry: header.expiry,
   }));
 
   // Vraćam podatke iz odgovora
   return {
     data: responseData,
   };
 }