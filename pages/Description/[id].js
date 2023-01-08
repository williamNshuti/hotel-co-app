import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import image2 from "../../images/use1.jpg";
import image3 from "../../images/use2.jpeg";
import image4 from "../../images/use3.jpeg";
import image5 from "../../images/use4.jpg";
import image6 from "../../images/use5.jpeg";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
  contentCenter,
} from "../../themes/commonStyles";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { getSingleDetails } from "../api/api";

function SingleRoomDetails() {
  const [images, setImages] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useQuery(
    ["singleHotelDetails", id],
    getSingleDetails,
    {
      onSuccess: (data) => {
        const object = {};
        data.locationImages.forEach((element, index) => {
          object[index] = element;
        });
        return setImages(object);
      },
    }
  );

  if (isError) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Typography component="h3"> Error</Typography>
        </Grid>
      </Grid>
    );
  }

  if (isLoading || !data) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <BeatLoader color="black" loading={isLoading} size={20} />
        </Grid>
      </Grid>
    );
  }

  return (
    <div className="scrollable">
      <CssBaseline />

      {data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container maxWidth="xl" sx={{ mt: 3 }}>
            <Box sx={flexBetween}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: "bold",
                }}
                component="h1"
                fontSize={20}
              >
                {data.name}
              </Typography>
            </Box>
            <Box sx={flexBetween}>
              <Box sx={{ mt: 1 }}>
                <Box sx={dFlex}>
                  <Box sx={dFlex}>
                    <AiFillStar size={18} />
                    <Typography component="h5"> {data.rating}</Typography>
                  </Box>
                  <Box sx={dFlex} className="lnk-underline">
                    <Link href="#" color="inherit">
                      <Typography component="h5" fontWeight="bold">
                        {" "}
                        {`${data.review} Reviews`}
                      </Typography>
                    </Link>
                  </Box>
                  <Box sx={dFlex} className="lnk-underline">
                    <Link href="#" color="inherit">
                      <Typography component="h5" fontWeight="bold">
                        {" "}
                        {data.location}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Box sx={dFlex}>
                  <Box sx={dFlex} className="lnk-underline">
                    <FiShare size={18} />
                    <Link href="#" color="inherit">
                      <Typography fontWeight="bold"> Share</Typography>
                    </Link>
                  </Box>
                  <Box sx={dFlex} className="lnk-underline">
                    <AiOutlineHeart size={18} />
                    <Link href="#" color="inherit">
                      <Typography fontWeight="bold"> Save</Typography>
                    </Link>
                  </Box>{" "}
                </Box>
              </Box>
            </Box>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid
                item
                xs={12}
                md={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Paper>
                  <img
                    src={data.locationImages[0].url}
                    alt="Meal-khuj"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Paper>
                      <img
                        src={data.locationImages[1].url}
                        alt="Meal-khuj"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Paper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Paper>
                      <img
                        src={data.locationImages[2].url}
                        alt="Meal-khuj"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Paper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Paper>
                      <img
                        src={data.locationImages[3].url}
                        alt="Meal-khuj"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Paper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Paper>
                      <img
                        src={data.locationImages[4].url}
                        alt="Meal-khuj"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>{" "}
            </Grid>

            <Box sx={(flexBetween, { mt: 3 })}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: "bold",
                }}
                component="h1"
                fontSize={16}
              >
                Hotel Description
              </Typography>

              <Box sx={{ mt: 1, mb: 2 }}>
                <Typography component="h3"> {data.description}</Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </div>
  );
}

export default SingleRoomDetails;
