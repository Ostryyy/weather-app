import { useState } from "react";
import { useWeatherStore } from "../store/weatherStore";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemButton,
  Box,
} from "@mui/material";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { fetchWeatherData, history } = useWeatherStore();
  const [showHistory, setShowHistory] = useState(false);

  const handleSearch = () => {
    if (input) {
      fetchWeatherData(input);
      setShowHistory(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        margin: "auto",
        textAlign: "center",
        p: 2,
      }}
    >
      <TextField
        fullWidth
        label="Enter city"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowHistory(true)}
        onBlur={() => setTimeout(() => setShowHistory(false), 200)}
      />
      <Button
        onClick={handleSearch}
        variant="contained"
        sx={{ mt: 1, width: "100%" }}
      >
        Search
      </Button>

      {showHistory && history.length > 0 && (
        <List
          sx={{
            position: "absolute",
            top: "160px",
            width: "100%",
            maxWidth: "500px",
            background: "white",
            boxShadow: 2,
          }}
        >
          {history.map((city, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => fetchWeatherData(city)}>
                {city}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchBar;
