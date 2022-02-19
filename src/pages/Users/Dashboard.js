import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/Cards/ProductCard";
import CartCard from "../../components/Cards/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { SearchProductAction } from "../../redux/actions/ProductAction";

function Dashboard() {
  const dispatch = useDispatch();
  const { searchProduct } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(SearchProductAction([]));
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3} md={8}>
            <ProductCard products={searchProduct} />
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
