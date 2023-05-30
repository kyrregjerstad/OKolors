<script>
	export let author = "";

	function getCurrentYear() {
		return new Date().getFullYear().toString();
	}
</script>

<footer class="footer mt-10 flex w-full items-center justify-center border-t border-primary-500 border-opacity-50 p-10">
	<p>{author} - {getCurrentYear()}</p>
</footer>
