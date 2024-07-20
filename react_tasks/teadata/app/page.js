import Teadisplay from "./teadisplay";

let teaData = [{ name: "red label", origin: "india", description: "Red Label is one of Indias largest selling packaged tea brands." },
{ name: "Taj Mahal", origin: "assam", description: "Brooke Bond Taj Mahal Tea House, appeals to tea connoisseurs, classical live music enthusiasts, book lovers, and many an artistic soul." }]

function Home() {
  return (
    <div>Home page
      {/* <Teadisplay
        name={teaData[0].name}
        origin={teaData[0].origin}
        description={teaData[0].description}
      /> */}
      {teaData.map(tea => <Teadisplay tea={tea} /> )}
    </div>
  );
}
export default Home;