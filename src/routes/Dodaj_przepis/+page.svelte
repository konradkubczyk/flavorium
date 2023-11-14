<script>
    //	import Counter from './Counter.svelte';
    //	import welcome from '$lib/images/svelte-welcome.webp';
    //	import welcome_fallback from '$lib/images/svelte-welcome.png';
    import placeholder from '$lib/images/placementpreview.png'
	import { submitData } from './submit_data';
    </script>
    
    <svelte:head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
    </svelte:head>
    
    <section>
         
 <div id="client-list"> 
    <ul class="list-group" id = "customer-list">
        <li class="list-group-item"></li>
    </ul>

 </div>
<form id="client-form">
   <div class="form-group"> 
        
        <label class=" ">Nazwa przepisu</label>
        <input class="form-control" id="name" required placeholder="np. tosty z nutellą">
    </div>
    <div class="form-group">
        <label >NIP</label>
        <input class="form-control"  id="NIP"required placeholder="NIP">
    </div>
    <div class="form-group">
        <label >Miasto</label>
        <input class="form-control" id="city" required placeholder="enter your email">
    </div>
    <div class="form-group">
        <label>Ulica</label>
        <input id="Street" required placeholder="enter your email">
    </div>
    <div class="form-group">
        <label >Numer domu </label>
        <input id="HouseNumber" required placeholder="enter your email">
    </div>
    <div class="form-group">
        <label >Numer mieszkania </label>
        <input id="FlatNumber" placeholder="enter your email">
    </div>
    <div class="form-group">
        <label  >Kod pocztowy </label>
        <input id="PostalAdress" required placeholder="enter your email">
    </div>  
    <div class="form-group" >
        <label for="exampleFormControlTextarea1">Uwagi</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="1"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Wybierz swoja branze z poniższej listy</label>
        <select id="industry"  class="custom-select my-1 mr-sm-2" >
          <option value="1">Budowlanka</option>
          <option value="2">Konserwacja powierzchni płaskich</option>
          <option value="3">Usługi</option>
          <option value="4">Beuty</option>
          <option value="5">Edukacja</option>
        </select>
      </div>
      <div class="custom-control custom-checkbox my-1 mr-sm-2"> 
        <input id="active" type="checkbox" class="custom-control-input" >
        <label class="custom-control-label" for="customControlInline">Aktywny</label>
      </div>
      <button  type= "button" on:click={submitData} >Submit </button>
</form>

<button >Ostatnie Dane </button>

<button >Pokaż formularz   </button>

<div>
    <input>

</div>


            
    
        
    </section>
    
    <style>
        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 0.6;
        }
    
   
        .welcome {
            display: block;
            position: relative;
            width: 100%;
            height: 0;
            padding: 0 0 calc(100% * 495 / 2048) 0;
        }
    
    
    </style>
    