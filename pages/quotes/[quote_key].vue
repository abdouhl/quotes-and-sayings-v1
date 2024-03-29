<script setup>
import { useI18n } from '#imports'


const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const nav = reactive({ lang: false ,opts: false })
const {quote_key} = useRoute().params

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

//const { data } = await useAsyncData('home', () => queryContent('/en/blog').where({ _dir: "blog" }).only(['title','_path']).find())
const query = queryContent({where: {_path: { $contains: '/'+locale.value }}})


const { data: quotes_list } = await useAsyncData('home', () => queryContent('/'+locale.value+'/quotes').find())
const author_username = quotes_list._value[0].body.filter(l => l['key'] == quote_key )[0].username

onMounted(async () => {
	await nextTick()
	var message = document.createElement("script");
  var alert = document.createTextNode("(adsbygoogle = window.adsbygoogle || []).push({});");
  message.appendChild(alert);
  document.body.appendChild(message);	
})

useHead({
  title: t('title'),
  meta: [
    { name: 'title', content: t('title') },
    { name: 'description', content: t('site_description')  },
    { name: 'robots', content: "index, follow" },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: t('title') },
    { name: 'og:description', content: t('site_description')  },
    { name: 'og:image', content: "https://www.quotesandsayings.net/screen-"+locale.value+".png" },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('title') },
    { name: 'twitter:image', content: "https://www.quotesandsayings.net/screen-"+locale.value+".png" },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
  script: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3610150616518651',async:'',crossorigin: "anonymous"}
  ]
})


</script>

<template>
<header class="items-center bg-white shadow-lg border-t-4 border-slate-700">
  <div class="flex flex-1 items-center p-3">
    <a class="flex items-center font-mono tracking-tighter text-slate-700 hover:text-slate-800" :href="localePath('/')">
      <svg class="w-10 mr-2" fill="currentColor" viewBox="0 0 121.5 114.7" xmlns="http://www.w3.org/2000/svg">
        <path d="m 0.5 65 c -5 -62.5 77.5 -92.5 110 -30 h -17.5 c -7.5 -20 -62.5 -37.5 -76.25 15 h 40 l 65 65 h -21.25 l -10 -10 c -35 22.5 -75 5 -85 -25 h 17.5 c 7.5 15 30 27.5 55.75 13.75 l -28.25 -28.75 z m 70 -15 h 43.5 c 1.5 5 1.5 20 -7 36.5 z"/>
      </svg>
      <pre class="font-mono font-bold text-sm">{{ $t('title') }}</pre>
    </a>
  </div>
  <nav class="absolute top-0 right-0 mt-3 md:w-auto py-1 px-2">
    <ul class="flex justify-end items-start text-slate-900 text-sm text-center">
      <li class="md:w-auto mx-2 px-2 bg-white border border-slate-300 rounded">
        <div class="w-16 md:w-24">
          <a href="#" class="block py-1 px-1" @click.prevent="nav.opts=!nav.opts">{{ $t('blog') }}</a>
          <ul v-if="nav.opts" class="my-2 text-sm leading-loose text-center">
						<li ><a :key="authors" :href="localePath('/')">{{ $t('authors') }}</a></li>
						<li ><a :key="topics" :href="localePath('/topics')">{{ $t('topics') }}</a></li>
						<li ><a :key="shop" :href="localePath('/shop')">{{ $t('shop') }}</a></li>
						</ul>
        </div>
      </li>
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

<section :dir="$t('dir')" class="w-full grid mx-auto  grid-cols-1 gap-2 md:gap-8 mty2 md:my-8 px-2 md:px-24 lg:px-36 text-slate-700" >
<div v-for="quote in quotes_list[0].body.filter(l => l['key'] == quote_key )" class=" rounded-lg bg-white divide-y  px-1 md:px-2">
<p class="p-1 md:p-2">{{quote.text}}</p>
<h2 class="text-xl text-center py-1 " style="font-family: Lobster, cursive;"><a :href="localePath('/authors/'+quote.username)" >{{quote.name}}</a></h2>
</div>


</section>
<section :dir="$t('dir')" class="w-full gap-2 md:gap-8 mty2 md:my-8 px-2 md:px-24 lg:px-36 text-slate-700" >
<ins  class="adsbygoogle"
 style="display:block; text-align:center;"
 data-ad-layout="in-article"
 data-ad-format="fluid"
 data-ad-client="ca-pub-3610150616518651"
 data-ad-slot="9731162583">
</ins>
</section>
<section :dir="$t('dir')" class="w-full grid mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 mty2 md:my-8 px-2 md:px-24 lg:px-36 text-slate-700" >
<div v-for="quote in quotes_list[0].body.filter(l => l['username'] == author_username ).filter(l => l['key'] != quote_key )" class=" rounded-lg bg-white divide-y  px-1 md:px-2 flex flex-col">
<p class="flex-1 p-1 md:p-2 flex items-center">{{quote.text}}</p>
<h2 class="flex-none text-xl text-center py-1 " style="font-family: Lobster, cursive;"><a :href="localePath('/authors/'+quote.username)" >{{quote.name}}</a></h2>
</div>

</section>



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


</i18n>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');


body {
background-color: #f1f5f9;
}

</style>


