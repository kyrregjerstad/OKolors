<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import ColorSpaceCompatibility from "$lib/components/ColorSpaceCompatibility.svelte";
	import AddNewColorButton from "$lib/components/buttons/AddNewColorButton.svelte";
	import ColorRange from "$lib/components/color-range/ColorRange.svelte";
	import { colorStore } from "$stores/colorStore";
	import { onMount } from "svelte";
	import { flip } from "svelte/animate";

	/* 
	
	TODO: 
	- Add a way to remove colors ✓
	- Add a way to change the order of colors

	- Check if device is p3 compatible ✓

	- Add better color picker
	- Add option to enter hex code

	- Add copy button to code block ✓
	- Add option to toggle color name comments in code block

	- Add about page
	- Add section with links to articles and other oklch tools

	- Add presets

	- Add login?
	- Add option to save your own presets?
	- Add option to share presets

	- Highlight that the center color is the one that is being changed

	- "Can i use" for oklch

	- Add option for random color, dice icon

	*/

	let deviceColorSpace: string | null = null;
	onMount(() => {
		deviceColorSpace = window.matchMedia("(color-gamut: p3)").matches ? "p3" : "srgb";
	});
</script>

<section class="max-w-[1920px] flex-1">
	<ColorSpaceCompatibility {deviceColorSpace} />
	{#each $colorStore as inputColor (inputColor.id)}
		<div animate:flip={{ duration: 350 }}>
			<ColorRange {inputColor} />
		</div>
	{/each}
	<AddNewColorButton />
	<CodeBlock inputColors={$colorStore} />
</section>
<section class="flex-1">
	<div class="card w-full p-4">
		<h2 class="h2 my-5">What is OKLCH?</h2>

		<article class="prose text-justify">
			<p class="leading-7">
				Alright, let's dive into this OKLCH thing. It's a cool, new way to play around with CSS colors. Basically,
				you've got four parts to it: Lightness, Chroma, Hue, and Alpha. Lightness is just how light or dark the color
				is, from pitch black (0%) to blinding white (100%). Chroma adds the color's intensity, or saturation. Hue is the
				base color, picked from a wheel that goes from 0 to 360 degrees. Alpha is the secret sauce for how see-through
				your color is, going from invisible (0) to totally opaque (1).
			</p>
			<!-- <br /> -->
			<p class="leading-7">
				The cool thing about OKLCH? It behaves just like you'd expect when you're tweaking colors, which is super handy.
				Plus, it's ready for the future, supporting a way wider range of colors than the usual sRGB, even if not all
				screens can show these colors just yet. But don't worry, browsers got your back and will adjust to the closest
				color they can handle. So, OKLCH isn't just a fancy new toy, it's got some serious game-changing potential in
				web design and development. Give it a whirl!
			</p>
		</article>
		<div class="list-nav mt-10">
			<h3 class="h3 my-3">Some other great resources about OKLCH</h3>
			<ul>
				<li>
					<a href="https://oklch.com/">
						<span class="badge bg-primary-500">⚡</span>
						<span class="flex-auto">OKLCH Color Picker & Converter</span>
					</a>
				</li>
				<li>
					<a href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl">
						<span class="badge bg-primary-500">⚡</span>
						<span class="flex-audio"> OKLCH in CSS: why we moved from RGB and HSL</span></a
					>
				</li>
			</ul>
		</div>
	</div>
</section>
