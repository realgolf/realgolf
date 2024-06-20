<script lang="ts">
	import type { Course_Data } from '$lib/types/courses';
	import { onMount } from 'svelte';
	import { _, isLoading } from 'svelte-i18n';

	export let data: Course_Data;

	let latitude: number;
	let longitude: number;
	let courses = data.courses;

	function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
		const R = 6371; // Radius of the earth in km
		const dLat = deg2rad(lat2 - lat1);
		const dLon = deg2rad(lon2 - lon1);
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const distance = R * c; // Distance in km
		return distance;
	}

	function deg2rad(deg: number) {
		return deg * (Math.PI / 180);
	}

	onMount(() => {
		window.navigator.geolocation.getCurrentPosition((position) => {
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;

			courses = courses.map((course) => {
				course.distance = getDistanceFromLatLonInKm(
					latitude,
					longitude,
					course.geolocation.latitude,
					course.geolocation.longitude
				);
				return course;
			});

			courses.sort((a, b) => (a.distance && b.distance ? a.distance - b.distance : 0));

			console.log(courses); // Courses now sorted by distance
		});
	});
</script>

<svelte:head>
	<title>Real Golf - {$_('course')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('course')}</h1>

	{#if courses}
		<div class="courses">
			{#each courses as course}
				<div class="course">
					<p><span>{$_('name')}:</span> {course.name}</p>
					<p><span>{$_('location')}:</span> {course.location}</p>
					<p><span>{$_('par')}:</span> {course.total_par}</p>
					{#if course.distance == undefined}
						<p><span>{$_('distance')}:</span> Calculating...</p>
					{:else}
						<p><span>{$_('distance')}:</span> {course.distance.toFixed(0)} km</p>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
{/if}

<style lang="scss">
	.courses {
		display: flex;
		flex-wrap: wrap;

		.course {
			border-bottom: 1px solid var(--border-color);
			margin: 10px;
			padding: 10px;
		}
	}
</style>
