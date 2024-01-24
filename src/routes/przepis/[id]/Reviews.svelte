<script lang="ts">
	import { Comment } from '$lib/models/comment.ts';

	const commentData = new Comment();
	let allComments: Comment[] = [];

	function handleSubmit() {
		let singleComment = structuredClone(commentData);
		allComments = [...allComments, { ...singleComment }];
		console.log(allComments);
	}
</script>

<div id="commentSection" class="mt-10">
	<h2 class="mb-4 text-2xl font-semibold">Opinie</h2>
	<div id="comments-counter" class="mb-4 text-lg">Liczba opinii: {allComments.length}</div>
	<form id="addComment" on:submit|preventDefault={handleSubmit} class="mb-4">
		<textarea
			id="commentText"
			class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
			bind:value={commentData.text}
			placeholder="Dodaj komentarz..."
			required
		></textarea>

		<div class="flex items-center justify-between mt-2 space-x-2">
			<div>
				{#each [1, 2, 3, 4, 5] as rating}
					<input
						type="radio"
						name="rating"
						value={rating}
						bind:group={commentData.score}
						id={`star${rating}`}
						class="hidden"
					/>
					<label for={`star${rating}`} class="text-xl cursor-pointer text-blue-600">
						{#if Number(commentData.score ?? 0) >= rating}
							&#9733; <!-- Highlighted star -->
						{:else}
							&#9734; <!-- Unhighlighted star -->
						{/if}
					</label>
				{/each}
			</div>

			<button
				type="submit"
				class="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition disabled:opacity-50 disabled:hover:bg-blue-600 disabled:cursor-not-allowed"
			>
				Dodaj Komentarz
			</button>
		</div>
	</form>

	<div id="comments">
		{#each allComments as singularComment}
			<div class="mb-4 p-4 border border-blue-gray-200 rounded">
				<p class="text-blue-gray-700 mb-2">{singularComment.text}</p>
				<p class="text-blue-gray-500">{singularComment.score}/5</p>
			</div>
		{/each}
	</div>
</div>
