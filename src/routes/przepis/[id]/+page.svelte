<script lang="ts">
	import { text } from '@sveltejs/kit';
	import { comment } from 'postcss';
	

	export let data;

	class Comment {
		author?: string;
		text?: string;
		score?: string;
	}
	const commentData = new Comment();
	let allComments: Comment[] = [];
	function handleSubmit() {
		let singleComment = structuredClone(commentData);
		allComments = [...allComments, { ...singleComment }];
		console.log(allComments);
	}
</script>

<div class="container mx-auto">
	<div class="flex justify-between items-center my-20">
		<div>
			<h1 class="text-3xl">{data.recipe.name}</h1>
			<span class="mt-1 flex items-center gap-2 uppercase tracking-widest text-sm text-gray-500">
				{data.recipe.category}
				<span class="text-xs">/</span>
				{data.recipe.subcategory}
			</span>
		</div>
		<div class="flex gap-5 flex-wrap text-right items-center">
			<div class="flex flex-col">
				<span class="uppercase tracking-widest text-xs text-gray-500">poziom trudności</span>
				<span class="text-2xl">{data.recipe.difficulty}/3</span>
			</div>
			<div class="border-r border-gray-300 h-10"></div>
			<div class="flex flex-col">
				<span class="uppercase tracking-widest text-xs text-gray-500">czas przygotowania</span>
				<span class="text-2xl">{data.recipe.time} min</span>
			</div>
			<div class="border-r border-gray-300 h-10"></div>
			<div class="flex flex-col">
				<span class="uppercase tracking-widest text-xs text-gray-500">porcje</span>
				<span class="text-2xl">{data.recipe.servings}</span>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-3 gap-5">
		<div class="rounded-lg p-5 bg-yellow-50 text-yellow-950 col-span-1">
			<h2 class="text-xl">Składniki</h2>
			<ul class="mt-5 flex flex-col gap-3">
				{#each data.recipe.ingredients as ingredient}
					<li class="flex justify-between border-b border-dotted border-b-yellow-800 py-2">
						<span>{ingredient.name}</span>
						<span>{ingredient.quantity} {ingredient.unit}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="rounded-lg p-5 bg-teal-50 text-teal-950 col-span-2">
			<h2 class="text-xl">Opis</h2>
			<p class="mt-5">{data.recipe.description}</p>
		</div>
	</div>

	<h2 class="mt-10 text-xl">Sposób przygotowania</h2>

	<div class="mt-5 flex flex-col gap-5">
		{#each data.recipe.steps as step, index}
			<div class="border-l-2 border-emerald-600 pl-5">
				<h3 class="text-lg">Krok {index + 1}</h3>
				<p class="mt-5">{step.description}</p>
			</div>
		{/each}
	</div>
	<div id="commentSection">
		<div id="comments-counter">Liczba komentarzy: {allComments.length}</div>
		<form id="addComment" on:submit|preventDefault={handleSubmit}>
			<input
				id="commentText"
				class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
				bind:value={commentData.text}
			/>
			<!--Ten kod jest do wyrzucenia poprostu, jest to placeholder na normalny kod-->

			<div class="stars">
				<input type="radio" name="rating" value="1" bind:group={commentData.score} />
				<input type="radio" name="rating" value="2" bind:group={commentData.score}/>
				<input type="radio" name="rating" value="3" bind:group={commentData.score}/>
				<input type="radio" name="rating" value="4" bind:group={commentData.score}/>
				<input type="radio" name="rating" value="5" bind:group={commentData.score}/>
			<button
				type="submit"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>Dodaj Komentarz</button
			>
		</form>

		<div id="comments">
			{#each allComments as singularComment}
				<p>{singularComment.text} , {singularComment.score}/5</p>
				
			{/each}
			
		</div>
	</div>
</div>
