import { Route, Routes } from "react-router-dom";
import AllMeetups from "./Pages/AllMeetups";
import NewMeetup from "./Pages/NewMeetup";
import Favorites from "./Pages/Favorites";
import MainNavigation from "./Components/layout/MainNavigation";
import Layout from "./Components/layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} exact />

          <Route path="/new-meetup" element={<NewMeetup />} exact />

          <Route path="/favorites" element={<Favorites />} exact />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
