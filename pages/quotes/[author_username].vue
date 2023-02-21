<script setup>
import { useI18n } from '#imports'
import { until } from '@vueuse/core'

var {author_username} = useRoute().params

var ll = author_username.split('-')
author_username = ll[0]

var quote_key = author_username
if(ll.length == 2){
quote_key = ll[1]
}

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const nav = reactive({ lang: false })

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const {pending,data} = useLazyFetch(useRuntimeConfig().apiUrl+author_username+'/'+locale.value,{key: author_username})


onMounted(async () => {
	await nextTick()
	if(!pending._value){
	if(data._value.quotes_list.length <= 6 ){
	var message = document.createElement("script");
  var alert = document.createTextNode("(adsbygoogle = window.adsbygoogle || []).push({});");
  message.appendChild(alert);
  document.body.appendChild(message);	
	}
	for(const [i, v] of data._value.quotes_list.entries()){
	if(i%6==0 && i!= 0){
	var message = document.createElement("script");
  var alert = document.createTextNode("(adsbygoogle = window.adsbygoogle || []).push({});");
  message.appendChild(alert);
  document.body.appendChild(message);	
	}
	}
  }
})


useSchemaOrg([
	defineWebSite({
    name: 'quotes and sayings',
  }),
  defineWebPage(),
])

await until(pending).toBe(false)


useHead({
  title: locale.value =="ar"? t('quotes')+' '+data._value.author.name : data._value.author.name+' '+t('quotes'),
  meta: [
    { name: 'title', content: locale.value =="ar"? t('quotes')+' '+data._value.author.name : data._value.author.name+' '+t('quotes') },
    { name: 'description', content: t('description') +data._value.author.name },
    { name: 'robots', content: "index, follow" },
    { name: 'keywords', content: t('quotes')+", "+data._value.author.name+", "+data._value.author.name+" "+t('quotes') },
    { name: 'og:type', content: 'article' },
    { name: 'og:title', content: locale.value =="ar"? t('quotes')+' '+data._value.author.name : data._value.author.name+' '+t('quotes') },
    { name: 'og:description', content: t('description') +data._value.author.name },
    { name: 'og:image', content: data._value.author.profile_image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: locale.value =="ar"? t('quotes')+' '+data._value.author.name : data._value.author.name+' '+t('quotes') },
    { name: 'twitter:image', content: 'https://8ooim6.deta.dev/'+quote_key },
  ],
  script: [
    {src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js'},  
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3610150616518651',async:'',crossorigin: "anonymous"}
  ]
})

</script>

<template>
  <div
    v-if="pending"
    class="w-screen h-screen grid content-center justify-center"
  >
    <div role="status" class="w-fit">
      <svg
        class="inline mr-2 w-16 h-16 text-stone-100 animate-spin fill-black mx-auto"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
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
  <nav class="z-50 absolute top-0 right-0 mt-3 md:w-auto py-1 px-2">
    <ul class="flex justify-end items-start text-slate-900 text-sm text-center">
      <li class="md:w-auto mx-2 px-2 bg-white border border-slate-300 rounded">
        <div class=" w-16 md:w-24">
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
    <div class="px-2 md:px-24 lg:px-36 w-full max-w-7xl mx-auto py-2 md:py-4">
      <div class="col-span-1 rounded-lg bg-white p-2 relative">
        
        <div
          v-if="data.author.profile_banner_url != ''"
          class="mx-auto w-fit h-fit relative"
        >
          <img
            class="rounded-lg border w-9/12 mx-auto"
            :src="data.author.profile_banner_url+'/600x200'"
          />
          <img
            class="rounded-full border border-2 border-white h-16 md:h-28 mx-auto absolute -bottom-8 md:-bottom-14 left-1/2 -translate-x-8 md:-translate-x-14"
            :src="data.author.profile_image"
          />
        </div>
        <div
          v-else
          class="mx-auto w-fit h-fit relative"
        >
          <img
            class="rounded-lg border w-6/12 mx-auto"
            src="/banner.png"
          />
          <img
            class="rounded-full border border-2 border-white h-16 md:h-28 mx-auto absolute -bottom-8 md:-bottom-14 left-1/2 -translate-x-8 md:-translate-x-14"
            :src="data.author.profile_image"
          />
        </div>

        <h3 :dir="t('dir')" class="text-center pt-2 md:text-xl mt-8 md:mt-14">
          {{data.author.name}}
          
          <Icon v-if="data.author.verified" name="material-symbols:verified" class=" text-sky-500 text-sm " />
        </h3>
        <p class="text-center text-gray-500 text-xs">
          @{{data.author.username}}
        </p>
      </div>
      <div :dir="t('dir')" class="mt-2 md:mt-4 divide-y divide-slate-200">
        <div class="md:text-2xl text-slate-800 p-2 md:p-4 pb-1 md:pb-2 w-full" v-for="(quote, index) in data.quotes_list" >
          <p class="whitespace-pre-line">{{quote.text}}</p>
          <div class="flex flex-row-reverse gap-2 pt-1 md:pt-2">
		        <a :href="'https://twitter.com/intent/tweet?url=https://www.quotesandsayings.net'+localePath('/quotes/')+'/'+data.author.username+'-'+quote.key"><Icon name="entypo-social:twitter-with-circle" class=" text-slate-400 hover:text-slate-500 text-l md:text-2xl" /></a>
		        <a :href="'http://pinterest.com/pin/create/button/?url=https://www.quotesandsayings.net'+localePath('/quotes/')+'/'+data.author.username+'-'+quote.key+'&media=https://8ooim6.deta.dev/p/'+quote.key+'&description='+quote.text" ><Icon name="entypo-social:pinterest-with-circle" class=" text-slate-400 hover:text-slate-500 text-l md:text-2xl" /></a>
          </div> 
          <ins v-if="index%6==0 && index!= 0" class="adsbygoogle"
 style="display:block; text-align:center;"
 data-ad-layout="in-article"
 data-ad-format="fluid"
 data-ad-client="ca-pub-3610150616518651"
 data-ad-slot="9731162583">
</ins>
        </div> 
        <ins v-if="data.quotes_list.length <= 6"  class="adsbygoogle"
 style="display:block; text-align:center;"
 data-ad-layout="in-article"
 data-ad-format="fluid"
 data-ad-client="ca-pub-3610150616518651"
 data-ad-slot="9731162583">
</ins>

      </div>
    </div>
  </div>

</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

body {
  background-color: #f1f5f9;
}
ins.adsbygoogle[data-ad-status="unfilled"] {
    display: none !important;
}

</style>

