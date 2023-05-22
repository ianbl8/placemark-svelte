// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from "axios";
import { latestCategory, latestPlace, user } from "../stores";

export const placemarkService = {
	baseUrl: "http://localhost:3000",

	async login(email, password) {
		try {
			const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {
				email,
				password
			});
			axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
			if (response.data.success) {
				user.set({
					email: email,
					token: response.data.token,
				});
				localStorage.placemark = JSON.stringify({
					email: email,
					token: response.data.token,
				});
				return true;
			}
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async logout() {
		user.set({
			email: "",
			token: "",
		});
		localStorage.removeItem("placemark");
		axios.defaults.headers.common["Authorization"] = "";
	},

	reload() {
		const placemarkCredentials = localStorage.placemark;
		if (placemarkCredentials) {
			const savedUser = JSON.parse(placemarkCredentials);
			user.set({
				email: savedUser.email,
				token: savedUser.token,
			});
			axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
		}
	},

	async signup(firstName, lastName, email, password) {
		try {
			const userDetails = {
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password
			};
			await axios.post(`${this.baseUrl}/api/users`, userDetails);
			return true;
		} catch (error) {
			return false;
		}
	},

	async getCategories() {
		try {
			const response = await axios.get(this.baseUrl + "/api/categories");
			return response.data;
		} catch (error) {
			return [];
		}
	},

	async getCategoryById(id) {
		try {
			const response = await axios.get(this.baseUrl + "/api/categories/" + id);
			return response.data;
		} catch (error) {
			return [];
		}
	},

	async addCategory(category) {
		try {
			const response = await axios.post(this.baseUrl + "/api/categories", category);
			latestCategory.set(category);
			return response.status == 201;
		} catch (error) {
			return false;
		}
	},

	async editCategory(category, newCategory) {
		try {
			console.log(category._id);
			console.log(newCategory);
			const response = await axios.post(this.baseUrl + "/api/categories/" + category._id, newCategory);
			latestCategory.set(category);
			return response.status == 201;
		} catch (error) {
			return false;
		}
	},

	async deleteCategory(id) {
		try {
			const response = await axios.delete(this.baseUrl + "/api/categories/" + id);
			latestCategory.set(null);
			return response.data;
		} catch (error) {
			return false;
		}
	},

	async getPlaces() {
		try {
			const response = await axios.get(this.baseUrl + "/api/places");
			return response.data;
		} catch (error) {
			return [];
		}
	},

	async getPlaceById(id) {
		try {
			const response = await axios.get(this.baseUrl + "/api/places/" + id);
			return response.data;
		} catch (error) {
			return [];
		}
	},

	async addPlace(categoryId, place) {
		try {
			console.log(place);
			const response = await axios.post(this.baseUrl + "/api/categories/" + categoryId + "/places", place);
			latestPlace.set(place);
			return response.status == 201;
		} catch (error) {
			return false;
		}
	},

	async editPlace(place, newPlace) {
		try {
			console.log(place._id);
			console.log(newPlace);
			const response = await axios.post(this.baseUrl + "/api/places/" + place._id, newPlace);
			latestPlace.set(newPlace);
			return response.status == 201;
		} catch (error) {
			return false;
		}
	},

	async deletePlace(id) {
		try {
			const response = await axios.delete(this.baseUrl + "/api/places/" + id);
			latestPlace.set(null);
			return response.data;
		} catch (error) {
			return false;
		}
	},

};
