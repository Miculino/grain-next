import Autocomplete from "react-google-autocomplete";

export default function AddressSearch() {
  const handlePlaceSelected = (place: string) => {
    console.log(place);
  };

  return (
    <div>
      Autocomplete address
      <Autocomplete
        apiKey="AIzaSyDz9wEqFecagZ1tGabdzQzLUEE7JHdbMSs"
        options={{
          componentRestrictions: { country: "SG" }, // Restrict to Singapore
          types: ["address"], // Specify types to get address locations
        }}
        onPlaceSelected={handlePlaceSelected}
        style={{ width: "100%" }} // Optional: Style for better UX
      />
    </div>
  );
}
