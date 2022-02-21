import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../theme/default";
import { useDispatch } from "react-redux";
import { SearchProductAction } from "../../redux/actions/ProductAction";

function ProductSearch() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const onChangeSearch = (event) => {
    event.preventDefault();
    dispatch(SearchProductAction(event.target.value));
    setSearch(event.target.value);
  };
  useEffect(() => {
    dispatch(SearchProductAction([]));
  }, []);

  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 350,
        borderRadius: 20,
        backgroundColor: theme.palette.common.lightGreen,
      }}
    >
      <IconButton
        sx={{ p: "10px" }}
        aria-label="search"
        style={{
          backgroundColor: theme.palette.success.main,
          borderRadius: 20,
          marginLeft: -4,
        }}
      >
        <SearchIcon style={{ color: theme.palette.default.main }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Foods"
        value={search}
        onChange={onChangeSearch}
        inputProps={{ "aria-label": "search food maps" }}
      />
    </Paper>
  );
}

export default ProductSearch;
