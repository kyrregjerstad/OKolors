<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import ColorSpaceCompatibility from "$lib/components/ColorSpaceCompatibility.svelte";
	import AddNewColorButton from "$lib/components/buttons/AddNewColorButton.svelte";
	import ColorRange from "$lib/components/color-range/ColorRange.svelte";
	import { colorStore } from "$stores/colorStore";
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
</script>

<section class="max-w-[1920px] flex-1">
	<ColorSpaceCompatibility />
	{#each $colorStore as inputColor (inputColor.id)}
		<div animate:flip={{ duration: 350 }}>
			<ColorRange {inputColor} />
		</div>
	{/each}
	<AddNewColorButton />
	<CodeBlock inputColors={$colorStore} />
</section>
<section class="flex-1">
	<div class="card flex w-full flex-col p-4 sm:p-8">
		<h2 class="h2 my-5">What is OKLCH?</h2>

		<article class="prose text-justify text-on-surface-token">
			<p class="leading-7">
				OKLCH is a modern color space designed for improved perceptual uniformity and color management in digital
				imaging and design applications. Standing for OK Lightness, Chroma, and Hue, OKLCH builds upon the OKLAB color
				space, which itself is an advancement over traditional color spaces like sRGB and Lab. The key advantage of
				OKLCH is its ability to represent colors in a way that aligns more closely with human vision, ensuring that
				color differences perceived by viewers are consistent across various contexts. This is particularly useful for
				tasks such as color grading, where subtle variations in color must be managed precisely.
			</p>

			<p class="leading-7">
				In technical terms, OKLCH decomposes colors into three components: lightness (L), chroma (C), and hue (H).
				Lightness represents the perceived brightness of a color, chroma denotes the color's intensity or saturation,
				and hue specifies the color's position on the color wheel. By separating these attributes, OKLCH allows for more
				intuitive color manipulation, making it easier to adjust specific aspects of a color without unintended shifts
				in other attributes. This separation is achieved through a perceptually uniform space, which means that the
				mathematical distance between colors in OKLCH corresponds more accurately to perceived differences in color. As
				a result, OKLCH facilitates more precise color adjustments and consistent color reproduction across different
				devices and media.
			</p>
		</article>
		<div class="list mt-10 flex flex-col">
			<h3 class="h3 my-3">Some other great resources about OKLCH</h3>
			<ul class="flex flex-col gap-5">
				<li>
					<a href="https://oklch.com/">
						<span class="badge bg-primary-500">⚡</span>
						<span class="w-full break-words"> OKLCH Color Picker & Converter </span>
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
