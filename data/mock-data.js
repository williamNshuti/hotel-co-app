import {
  MdOutlinePool,
  MdOutlineHotTub,
  MdApartment,
  MdVilla,
  MdClearAll,
  MdViewList,
} from "react-icons/md";
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
import { FaCampground, FaHotel } from "react-icons/fa";
import { TbBuildingWarehouse } from "react-icons/tb";

// Random  Filters Based on data

export const FiltersTab = [
  { id: 0, label: "All", icon: <MdViewList size={24} />, key: "" },
  {
    id: 1,
    key: "Apartment",
    label: "Apartment",
    icon: <MdApartment size={24} />,
  },
  { id: 2, label: "Hotel", icon: <FaHotel size={24} />, key: "Hotel" },
  {
    id: 3,
    key: "Condo",
    label: "Condo",
    icon: <TbBuildingWarehouse size={24} />,
  },
  { id: 4, key: "Villa", label: "Villa", icon: <MdVilla size={24} /> },
  { id: 5, key: "Cottage", label: "Cottage", icon: <GiKidSlide size={24} /> },
  {
    id: 6,
    key: "Cabin",
    label: "Cabin  ",
    icon: <MdOutlineHotTub size={24} />,
  },
  { id: 7, key: "Boat", label: "Boat", icon: <FaCampground size={24} /> },
  {
    id: 8,
    key: "Pool Indoor",
    label: "Indoor Pool",
    icon: <MdOutlinePool size={24} />,
  },

  {
    id: 9,
    key: "Far",
    label: "Far From City",
    icon: <GiCampingTent size={24} />,
  },
  { id: 10, key: "Domes", label: "Domes", icon: <GiLightningDome size={24} /> },
  {
    id: 11,
    key: "Homes Tiny",
    label: "Tiny Homes",
    icon: <BiHomeAlt size={24} />,
  },
  {
    id: 12,
    key: "TreeHouse",
    label: "Treehouses",
    icon: <GiEvilTree size={24} />,
  },
  {
    id: 13,
    key: "Surfing",
    label: "Surfing",
    icon: <GiWaveSurfer size={24} />,
  },
  {
    id: 14,
    key: "CountrySide",
    label: "CountrySide",
    icon: <GiMountainCave size={24} />,
  },
  { id: 15, key: "Caves", label: "Caves", icon: <GiCaveEntrance size={24} /> },
  { id: 16, key: "Golfing", label: "Golfing", icon: <GiGolfFlag size={24} /> },
];
