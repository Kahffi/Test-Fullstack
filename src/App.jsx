import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
	MapContainer,
	Marker,
	TileLayer,
	useMapEvents,
	useMap,
} from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";

function CaseMarker() {
	const map = useMap();
	map.locate().on("locationfound", (e) => {
		map.flyTo(e.latlng, 16);
	});
	//useMapEvents({
	// 	tileloadstart: () => {
	// 		console.log("load");
	// 		map.locate();
	// 	},
	// 	locationfound: (location) => {
	// 		map.flyTo(location.latlng);
	// 	},
	// });
	return null;
}

function App() {
	return (
		<div className="App">
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<CaseMarker />
			</MapContainer>
		</div>
	);
}

export default App;
