// stores/searchStore.js

import { toast } from "react-toastify";
import { create } from "zustand";

const useSearchStore = create((set) => ({
  events: {},
  favEvents: {},
  isSidebarOpen: false,
  params: {
    q: "",
    country: "",
    category: "",
  },

  toggleSidebar: function () {
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    }));
  },

  searchForFavouriteEvents: async function () {
    const existingFavourites =
      JSON.parse(localStorage.getItem("favouritesList")) || [];
    if (existingFavourites.length != 0) {
      const favouritesToString = existingFavourites.join(",");
      const url =
        "https://api.predicthq.com/v1/events/?" +
        new URLSearchParams({ id: favouritesToString }).toString();

      const response = await fetch(url, {
        headers: {
          Authorization: "Bearer wxsHUV8WQUuYu6-h6o9SErrEcNGA9wgTgs-YTn1M",
          Accept: "application/json",
        },

        next: { revalidate: 0 },
      });
      const events = await response.json();
      set((state) => ({
        favEvents: events,
      }));
    }
  },

  addtoFavourites: function (id) {
    const existingFavourites =
      JSON.parse(localStorage.getItem("favouritesList")) || [];

    if (!existingFavourites.includes(id)) {
      existingFavourites.push(id);
      toast.info("Added to favourites!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.info("Already in favourites", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    localStorage.setItem("favouritesList", JSON.stringify(existingFavourites));
  },
  removefromFavourites: function (id) {
    var existingFavourites =
      JSON.parse(localStorage.getItem("favouritesList")) || [];

    if (existingFavourites.includes(id)) {
      existingFavourites = existingFavourites.filter((elem) => elem != id);
      toast.info("Removed from favourites!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      set((state) => ({
        favEvents: {
          ...state.favEvents,
          results: state.favEvents.results.filter((elem) => elem.id !== id),
        },
      }));
    } else {
      toast.info("Not in favourites", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    localStorage.setItem("favouritesList", JSON.stringify(existingFavourites));
  },

  setEvents: function (newEv) {
    set((state) => ({
      events: newEv,
    }));
  },
  searchEvents: async function (params) {
    const paramsObj = {};
    if (params.q) {
      paramsObj.q = params.q;
    }
    if (params.country) {
      paramsObj.country = params.country;
    }
    if (params.category) {
      paramsObj.category = params.category;
    }

    const url =
      "https://api.predicthq.com/v1/events/?" +
      new URLSearchParams(paramsObj).toString();
    console.log(url);
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer wxsHUV8WQUuYu6-h6o9SErrEcNGA9wgTgs-YTn1M",
        Accept: "application/json",
      },

      next: { revalidate: 0 },
    });
    const events = await response.json();
    set((state) => ({
      events: events,
    }));
  },
  setQuery: function (query) {
    set((state) => ({
      params: {
        ...state.params,
        q: query,
      },
    }));
  },
  setCountry: function (country) {
    set((state) => ({
      params: {
        ...state.params,
        country: country,
      },
    }));
  },
  setCategory: function (category) {
    set((state) => ({
      params: {
        ...state.params,
        category: category,
      },
    }));
  },
}));

export default useSearchStore;
