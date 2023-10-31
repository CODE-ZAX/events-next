import EventList from "../components/Event/EventList";
import MainEvent from "../components/Search/MainEvent";
import OffcanvasSidebar from "../components/Search/OffcanvasSidebar";

import Sidebar from "../components/Search/Sidebar";
export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <OffcanvasSidebar />
          <MainEvent />
        </div>
      </div>
    </div>
  );
}
