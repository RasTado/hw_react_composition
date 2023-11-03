import "../css/Widgets.css";
import WeatherWidget from "./WeatherWidget";
import VisitedWidget from "./VisitedWidget";
import MapWidget from "./MapWidget";
import TVProgramsWidget from "./TVProgramsWidget";
import BroadcastWidget from "./BroadcastWidget";

function Widgets() {
  return (
    <div className="widgets">
      <WeatherWidget />
      <VisitedWidget />
      <MapWidget />
      <TVProgramsWidget />
      <BroadcastWidget />
    </div>
  );
}

export default Widgets;
