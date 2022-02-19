import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ProductCard(props) {
  const { products } = props;
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Card style={{ borderRadius: 12 }} elevation={1}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="auto"
                    height="200"
                    image={product?.image}
                    alt={product?.foodName}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      fontWeight="bold"
                      fontFamily={"Source Sans Pro"}
                      textAlign="center"
                      fontSize={18}
                    >
                      {product?.foodName}
                    </Typography>
                    <Typography variant="body2" color="secondary" textAlign="center">
                      ₽ {product?.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

ProductCard.propTypes = {
  products: PropTypes.array,
};
export default ProductCard;
