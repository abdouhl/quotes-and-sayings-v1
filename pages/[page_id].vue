<script setup>
import { useI18n } from '#imports'

const {page_id} = useRoute().params


const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const nav = reactive({ lang: false })

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const {pending,data} = useLazyFetch(useRuntimeConfig().apiUrl+'p/'+page_id+'/'+locale.value,{key: page_id})

</script>

<template>
<div v-if="pending" class="w-screen h-screen grid content-center justify-center">
<div role="status" class="w-fit ">
    <svg class="inline mr-2 w-16 h-16 text-stone-100 animate-spin  fill-black  mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
</div>
  <div v-else>
    <header class="items-center bg-white shadow border-t-4 border-slate-800">
  <div class="flex flex-1 items-center p-3">
    <a class="flex items-center font-mono tracking-tighter" :href="localePath('/')">
      <svg class="w-10 mr-2" viewBox="0 0 121.5 114.7" xmlns="http://www.w3.org/2000/svg">
        <path d="m 0.5 65 c -5 -62.5 77.5 -92.5 110 -30 h -17.5 c -7.5 -20 -62.5 -37.5 -76.25 15 h 40 l 65 65 h -21.25 l -10 -10 c -35 22.5 -75 5 -85 -25 h 17.5 c 7.5 15 30 27.5 55.75 13.75 l -28.25 -28.75 z m 70 -15 h 43.5 c 1.5 5 1.5 20 -7 36.5 z" fill="currentFill"/>
      </svg>
      <pre class="font-mono font-bold text-sm">{{ $t('title') }}</pre>
    </a>
  </div>
  <nav class="absolute top-0 right-0 mt-3 md:w-auto py-1 px-2">
    <ul class="flex justify-end items-start text-slate-900 text-sm text-center">
      <li class="md:w-auto mx-2 px-2 bg-white border border-slate-300 rounded">
        <div class="w-16 md:w-24">
          <a href="#" class="block py-1 px-1" @click.prevent="nav.lang=!nav.lang">{{locales.map(i=>i.name)[locales.map(i=>i.code).indexOf(locale)]}}</a>
          <ul v-if="nav.lang" class="my-2 text-sm leading-loose text-center">
						<li v-for="locale in availableLocales" ><a :key="locale.code" :href="switchLocalePath(locale.code)">{{locale.name}}</a></li>
						</ul>
        </div>
      </li>
      <li class="hidden sm:block mt-1 mx-2">
        <a class="block w-6" href="https://www.pinterest.com/quotesandsayings_net/" title="Go to Pinterest Account">
          <Icon name="entypo-social:pinterest-with-circle" class="w-6 h-6 transition duration-200 fill-current text-slate-400 hover:text-slate-700" />
        </a>
      </li>
    </ul>
  </nav>
</header>
		<div class="grid mx-auto w-fit grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 mt-2 md:mt-4 px-2 md:px-24 lg:px-36">
		  <div class="aspect-square  max-h-60   rounded-lg bg-white p-2" v-for="author in data.authors" >
		    <nuxt-img class="rounded-full h-28 mx-auto" :src="author.profile_image" loading="lazy" />
		    <h3 class="text-center pt-2 md:text-xl truncate" >{{author.name}}</h3>
		    <p class="text-center text-gray-500 text-xs" >@{{author.screen_name}}</p>
		    <p class="text-center mt-4 mb-2"><a class="p-2   rounded-lg bg-stone-100 text-white bg-slate-400 text-xs md:text-l font-bold" :href="localePath('/quotes/'+author.screen_name)">{{ t('quotes') }}</a></p>
		  </div>
  </div>
  <div class="w-fit mx-auto  my-2 lg:my-4 text-l sm:text-3xl text-slate-400">
  	<div class="w-fit flex justify-center sm:gap-2  items-center">
  	
  	
  		<div class="my-2 mx-1 "><a  :class="page_id == '1' ? ['cursor-not-allowed','text-slate-300'] : ['text-slate-400','hover:text-slate-500']"  :href="localePath(page_id != '1' ?'/'+(parseInt(page_id)-1) : null)">
  		<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="currentColor" class="w-4 sm:w-8 bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
  		</a></div>
  		
  		<div class="my-2 mx-1 align-top font-bold" ><a :class="page_id == '1' ? 'text-slate-700' : ['text-slate-400','hover:text-slate-500']" :href="localePath(page_id != '1' ?'/1' : null)">
  		1
  		</a></div>
  		
  		<div v-if="parseInt(page_id) >= 5" class="my-2 mx-1" ><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg></div>
      
      
  		<div v-for="pagintion_num in data.pagintion_nums" class="my-2 mx-1 align-top font-bold" ><a :class="page_id == pagintion_num ? 'text-slate-700' : ['text-slate-400','hover:text-slate-500']" :href="localePath(page_id != pagintion_num ?'/'+pagintion_num : null)">
  		   {{pagintion_num}}
  		</a></div>      
      
      
      
  		<div v-if="parseInt(page_id) <= data.pages_count-4" class="my-2 mx-1" ><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg></div> 
       		
  		<div class="my-2 mx-1 align-top font-bold" ><a :class="page_id == data.pages_count ? 'text-slate-700' : ['text-slate-400','hover:text-slate-500']"  :href="localePath(page_id != data.pages_count ?'/'+data.pages_count: null)">
  		{{data.pages_count}}
  		</a></div>
  		
  		<div class="my-2 mx-1" ><a :class="page_id == data.pages_count ? ['cursor-not-allowed','text-slate-300'] : ['text-slate-400','hover:text-slate-500']" :href="localePath(page_id != data.pages_count ?'/'+(parseInt(page_id)+1) : null)">
  		<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="currentColor" class="w-4 sm:w-8 bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
  		</a></div>
  		
  	</div>
  </div>
  	
  </div>



<footer class="w-full">
<div class="w-full p-4 bg-slate-200 border-t border-gray-300 shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span class="text-sm text-gray-500 sm:text-center">© 2023 <a href="/" class="hover:underline">{{ $t('title') }}</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
        <li>
            <a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="/privacy-policy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/licensing" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="/contact" class="hover:underline">Contact</a>
        </li>
    </ul>
</div>
<div class="bg-slate-700 text-slate-100 text-center text-sm py-1 px-4">
  Created by
  <a class="underline" href="https://www.elhellal.com/">Abderrahmane HELLAL</a>
  <br>
</div>
</footer>


</template>
<i18n lang="json">
{
  "en": {
    "quotes": "Quotes",
  },
  "es": {
    "quotes": "Citas"
  },
  "fr": {
    "quotes": "Citations"
  },
  "de": {
    "quotes": "Zitate"
  },
  "pt": {
    "quotes": "Citações"
  },
  "ar": {
    "quotes": "أقوال"
  }
}
</i18n>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

body {
background-color: #f1f5f9;
}

</style>
