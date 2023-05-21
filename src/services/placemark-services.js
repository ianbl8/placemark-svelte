// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from "axios";

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
				return true;
			}
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async logout() {
		axios.defaults.headers.common["Authorization"] = "";
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

	async getPlaces() {
		try {
			const response = await axios.get(this.baseUrl + "/api/places");
			return response.data;
		} catch (error) {
			return [];
		}
	},

};
