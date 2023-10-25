// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

// GET ALL HOTELS

export const getAllHotels = async ({ pageParam = 1, category }) => {
  const { data } = await axios.get(
    `/hotels?page=${pageParam}&limit=4&category=${category}`
  );
  return data;
};

// GET SINGLE HOTEL DETAILS

export const getSingleDetails = async ({ queryKey }) => {
  const { data } = await axios.get(`/hotels/${queryKey[1]}`);
  return data;
};
