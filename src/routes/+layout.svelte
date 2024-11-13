<script>
	import '../app.css';
	import Footer from '../components/Footer/Footer.svelte';
	import Navbar from '../components/Navbar/Navbar.svelte';
	let { children } = $props();
</script>
<Navbar />
{@render children()}
<Footer />