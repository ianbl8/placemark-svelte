<script>
	// @ts-nocheck
	import Chart from 'svelte-frappe-charts';

	import { onMount } from 'svelte';
	import { placemarkService } from '../services/placemark-services.js';

  let pieChart = true;
  const handleClick = () => pieChart = !pieChart;

	let placesByCategory = {
		labels: [],
		datasets: [
			{
				values: []
			}
		]
	};

  function populateData(categories, places) {
		placesByCategory.labels = [];
		categories.forEach((category) => {
			placesByCategory.labels.push(`${category.title}`);
			placesByCategory.datasets[0].values.push(0);
		});
		categories.forEach((category, i) => {
      placesByCategory.datasets[0].values[i] = 0;
			places.forEach((place) => {
				if (place.categoryid == category._id) {
					placesByCategory.datasets[0].values[i] += 1;
				}
			});
		});
    console.log(placesByCategory);
  };

  async function refreshChart () {
		let categories = await placemarkService.getCategories();
		let places = await placemarkService.getPlaces();
    populateData(categories, places);
  }

	onMount(async () => {
    await refreshChart();
	});
</script>

<h1>Number of places for each category</h1>
{#if pieChart}
  <Chart data={placesByCategory} type="pie" />
  <button on:click={handleClick} class="button">Change to a bar chart</button>
{:else}
  <Chart data={placesByCategory} type="bar" />
  <button on:click={handleClick} class="button">Change to a pie chart</button>
{/if}