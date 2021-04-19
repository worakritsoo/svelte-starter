<style lang="postcss" type="text/postcss">
</style>

<script lang="ts">
	import { JSONHttpUtil } from '$lib/core';
	import Title from '$components/title/Title.svelte';

	// import Counter from '$lib/Counter.svelte';

	import { Logger, LoggerUtils } from '$lib/utils';
	import { onMount } from 'svelte';

	const logger: Logger = LoggerUtils.getInstance('Index');

	onMount(async () => {
		const data = await JSONHttpUtil.get<any>(
			'https://jsonplaceholder.typicode.com/photos?_limit=20',
		);
		// logger.debug(data);
	});
</script>

<Title title="Home" />

<section class="text-gray-600 body-font">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
				>Pea Box-Search
			</h1>
			<p class="mb-8 leading-relaxed">เพื่อช่วยในการค้นหา .</p>
			<p class="mb-8 leading-relaxed"
				>คลังความรู้ | ค้นหาแบบคลุมเคลือ | อินทราเน็ต | อ้างอิงตำแหน่งเก็บ</p
			>
			<p class="mb-8 leading-relaxed">ปลอดภัย </p>
			<p class="mb-8 leading-relaxed">PWA | SSR | "Svelte"</p>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img
				class="object-cover object-center rounded"
				alt="hero"
				src="https://upload.wikimedia.org/wikipedia/commons/e/e3/LOGO_PEA.jpg"
				width="720"
				height="600"
			/>
		</div>
	</div>
</section>
