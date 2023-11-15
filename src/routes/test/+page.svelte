<script lang="ts">
	import { get } from "svelte/store";
    import  names from "../../stores.ts";

	
    import {test} from './test'
    
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
    
</svelte:head>

<div class="text-column">
    <h2>Lista przepisów które przesłałeś</h2>
    {#each $names as item}
    <p>
       {item.id} {item.text}
    </p>
    {/each}

	
    <button on:click={test}>Test</button>
</div>
