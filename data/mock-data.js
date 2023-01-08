import { MdCabin, MdOutlinePool, MdOutlineHotTub } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import {
  GiKidSlide,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from "react-icons/gi";
import { AiOutlineCoffee, AiOutlineStar } from "react-icons/ai";
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import { RiEarthquakeFill } from "react-icons/ri";

// Random Category Filters

export const locationsTab = [
  { id: 1, label: "5 Star", icon: <AiOutlineStar size={24} /> },
  { id: 2, label: "4 Star", icon: <AiOutlineStar size={24} /> },
  { id: 3, label: "3 Star", icon: <AiOutlineStar size={24} /> },
  { id: 7, label: "Unrated", icon: <AiOutlineStar size={24} /> },
  { id: 4, label: "Indoor Pool", icon: <MdOutlinePool size={24} /> },
  { id: 5, label: "Spa Facilities", icon: <GiKidSlide size={24} /> },
  { id: 6, label: "Hot Tub/Jacuzzi  ", icon: <MdOutlineHotTub size={24} /> },
  { id: 8, label: "Near Downtown", icon: <FaCampground size={24} /> },
  { id: 9, label: "Far From City", icon: <GiCampingTent size={24} /> },
  { id: 10, label: "Domes", icon: <GiLightningDome size={24} /> },
  { id: 11, label: "Tiny Homes", icon: <BiHomeAlt size={24} /> },
  { id: 12, label: "Treehouses", icon: <GiEvilTree size={24} /> },
  { id: 13, label: "Surfing", icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: "CountrySide", icon: <GiMountainCave size={24} /> },
  { id: 15, label: "Caves", icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: "Golfing", icon: <GiGolfFlag size={24} /> },
  { id: 17, label: "Cabins", icon: <MdCabin size={24} /> },
  { id: 18, label: "Earth Homes", icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: "Tropical", icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: "Amazing Pools", icon: <FaSwimmingPool size={24} /> },
];
