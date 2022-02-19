import React from "react";
import ProductSearch from "../../components/Search/ProductSearch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/Cards/ProductCard";
import CartCard from "../../components/Cards/CartCard";

function Dashboard() {
  return (
    <div>
      <ProductSearch />
      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3} md={8}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={3} md={4}>
            <CartCard />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
