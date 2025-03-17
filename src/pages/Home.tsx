import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: "center" }}>Weather Forecast</h1>
      <SearchBar />
      <WeatherCard />
    </Container>
  );
};

export default Home;
