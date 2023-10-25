import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import OptionsTab from "../components/OptionsTab";
import Container from "@mui/material/Container";
import LocationCards from "../components/LocationCards";
import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import FooterMenu from "../components/FooterMenu";
import MobileFooter from "../components/MobileFooter";
import { displayOnDesktop } from "../themes/commonStyles";
import Header from "../components/Header";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useIntersectionObserver from "../components/intersectionObserver";
import { Grid, Skeleton } from "@mui/material";
import { getAllHotels } from "./api/api";
import Head from "next/head";

export default function Home() {
  const [category, setCategory] = useState("");

  // Get all hotel
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["hotels_infinite", category],
    ({ pageParam }) => getAllHotels({ pageParam, category }),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 10) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  // Referance to the bottom scroll page to trigger fetchNextPage and interaction observer
  const loadMoreRef = useRef();
  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <React.Fragment>
      <Head>
        <title>Hotels&Co | Home</title>
      </Head>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}>
        <Box>
          <Header />
          <OptionsTab setCategory={setCategory} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}>
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards
              data={data}
              error={error}
              isLoading={isLoading}
              isError={isError}
            />
            <div
              ref={loadMoreRef}
              className={`${!hasNextPage ? "hidden" : ""}`}>
              {isFetchingNextPage ? (
                <Box sx={{ mx: 2 }}>
                  <Grid container rowSpacing={3} columnSpacing={3}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Grid key={i} item xs={12} sm={4} md={4} lg={3}>
                        <Skeleton variant="rounded" height={230} />
                        <Box sx={{ pt: 0.5 }}>
                          <Skeleton />
                          <Skeleton width="60%" />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ) : (
                ""
              )}
            </div>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}>
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}
