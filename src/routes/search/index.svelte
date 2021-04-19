<style>
</style>

<!--  key with name title -->
<script context="module">
	export const db = [
		{
			title: 'การไฟฟ้าส่วนภูมิภาค',
			url: 'www.pea.co.th',
			prefix: 'กฟภ.',
			user: 'Worakrit Soontornthamniti',
			content: 'some contnet',
		},
		{
			title: 'อินทราเน็ต การไฟฟ้าส่วนภูมิภาค',
			url: 'http://intranet.pea.co.th',
			prefix: 'กฟภ.',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'อินทราเน็ต กฟต.3',
			url: 'http://intra.pea.co.th/peas3',
			prefix: 'กฟต.3',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'การไฟฟ้าโปร่งใส กฟต.3 ประจำปี 2564',
			url: 'http://strms.pea.co.th/s3/2564/tprS3-64/home.php',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'เว็บไซต์ สำนักงานสีเขียว กฟต.3',
			url: 'http://greenoffice.pea.co.th/2564/',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'เว็บไซต์สหกรณ์ออมทรัพย์ กฟภ.',
			url: 'http://www.peacoop.or.th/',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'เว็บไซต์เปลี่ยนแปลงสัดส่วนการลงทุน MFCfund',
			url: 'https://www.mfcfund.com',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'คลังความรู้ กฟต.3 youtube',
			url: 'http://bct.pea.co.th/youtube/',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'ระบบติดตามหนี้ค่าไฟฟ้าค้างชำระ ETSx',
			url: 'http://c2intra.pea.co.th/c2/ETSx_C2',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'ระบบติดตามผล การดำเนินการตามเป้าหมาย OKR',
			url: 'http://okr.pea.co.th/',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'Dashboard ',
			url: 'https://sites.google.com/view/s3-pms/home',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'ระบบบริหารจัดการพัสดุ',
			url: 'https://simp-peadashboard.web.app',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'เว็บไซต์ระบบจดหน่วยผู้ใช้ไฟฟ้ารายใหญ่ที่ไม่ใช่มิเตอร์',
			url: 'https://smr.pea.co.th',
			user: 'Worakrit Soontornthamniti',
		},
		{
			title: 'เว็บไซต์ลงทะเบียน/ตรวจสอบ การขอคืนเงินประกันการใช้',
			url: 'http://cdp.pea.co.th/',
			user: 'Worakrit Soontornthamniti',
		},
	];
</script>

<script>
	import Card from '$lib/shared/ui/components/card/Card.svelte';

	import Fuse from 'fuse.js';
	import { toggle_class } from 'svelte/internal';

	export let textInputs = '';

	const fuse = new Fuse(db, {
		keys: ['url', 'title'],
		includeScore: true,
	});
	$: linkResult = fuse.search(textInputs);

	function finding() {
		return 'กำลังหาจากเซิฟเวอร์';
	}
	let moreDetail = [];

	function toggle(i) {
		moreDetail[i] = !moreDetail[i];
	}

	const children = [];
</script>

<!-- markup (zero or more items) goes here -->
<section>
	<div class="flex justify-center my-5">
		<input
			class=" text-center bg-purple-200 hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 "
			type="search"
			bind:value="{textInputs}"
			placeholder="ค้นหา"
		/>
		<button on:click="{finding}"> ค้นหา🚀 </button>
	</div>

	{#if finding}
		<div class="grid">
			<ul>
				{#each linkResult as link, i}
					<Card bind:this="{children[i]}" on:click="{() => toggle(i)}">
						<span slot="card-content">
							<!-- {JSON.stringify(link.item)} -->
							<h1> {link.item.title} </h1>
							{#if moreDetail[i]}
								{link.item.user}
								<a href="{link.item.url}">{link.item.url}</a>
							{/if}
						</span>
					</Card>
				{/each}
			</ul>
		</div>
	{/if}
</section>
