import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ProductCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.cidrap.umn.edu/sites/default/files/public/styles/ss_media_popup/public/media/article/pasta.jpg?itok=yWbkRMAF"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.cidrap.umn.edu/sites/default/files/public/styles/ss_media_popup/public/media/article/pasta.jpg?itok=yWbkRMAF"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.cidrap.umn.edu/sites/default/files/public/styles/ss_media_popup/public/media/article/pasta.jpg?itok=yWbkRMAF"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.cidrap.umn.edu/sites/default/files/public/styles/ss_media_popup/public/media/article/pasta.jpg?itok=yWbkRMAF"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductCard;
