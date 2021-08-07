export async function getPlacesData() {
  let placesDataFromDB;
  await fetch("/api/getTrip", {
    method: "GET",
    dataFor: "GET_PLACES",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Cant able to get required data :( Please try again");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data, "fetched data from db");
      placesDataFromDB = data;
    })
    .catch((error) => {
      console.error(error);
    });
  return placesDataFromDB;
}
