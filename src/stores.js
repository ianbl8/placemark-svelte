import { writable } from "svelte/store";

export const user = writable({
  email: "",
  token: "",
});

export const latestCategory = writable(null);

export const latestPlace = writable(null);
