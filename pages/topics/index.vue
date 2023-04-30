<script setup>
import { useI18n } from '#imports'


const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const nav = reactive({ lang: false ,opts: false })

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})


const topics = t('topics_list').split(',')
const pending = false
const topic = reactive({ topic:"" })
var next_topic =null
next_topic = computed(() => {

    if(!topic.topic){
    return null
    }else{
    return  localePath("/topics/"+topic.topic)
    }
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
  }
})


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
    <header class="items-center bg-white shadow-lg border-t-4 border-slate-700">
  <div class="flex flex-1 items-center p-3">
    <a class="flex items-center font-mono tracking-tighter text-slate-700 hover:text-slate-800" :href="localePath('/')">
      <svg class="w-10 mr-2" fill="currentColor" viewBox="0 0 121.5 114.7" xmlns="http://www.w3.org/2000/svg">
        <path d="m 0.5 65 c -5 -62.5 77.5 -92.5 110 -30 h -17.5 c -7.5 -20 -62.5 -37.5 -76.25 15 h 40 l 65 65 h -21.25 l -10 -10 c -35 22.5 -75 5 -85 -25 h 17.5 c 7.5 15 30 27.5 55.75 13.75 l -28.25 -28.75 z m 70 -15 h 43.5 c 1.5 5 1.5 20 -7 36.5 z"/>
      </svg>
      <pre class="hidden sm:block font-mono font-bold text-sm">{{ $t('title') }}</pre>
    </a>
  </div>
  <nav class="absolute top-0 right-0 mt-3 md:w-auto py-1 px-2">
    <ul class="flex justify-end items-start text-slate-900 text-sm text-center">
      <li class="md:w-auto mx-2 px-2 bg-white border border-slate-300 rounded">
        <div class="w-16 md:w-24">
          <a href="#" class="block py-1 px-1" @click.prevent="nav.opts=!nav.opts">{{ $t('topics') }}</a>
          <ul v-if="nav.opts" class="my-2 text-sm leading-loose text-center">
						<li ><a :key="authors" :href="localePath('/')">{{ $t('authors') }}</a></li>
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
<section id="search-section" class="grid content-center h-64 w-full">
<div class="px-2 md:px-24 lg:px-36 w-full h-fit max-w-5xl mx-auto py-2 md:py-4">
      <div :dir="$t('dir')" id="post-form" class="mt-8 mb-2 w-full flex flex-row gap-2 md:gap-4">
      
      <input class="mb-2 p-2 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400 focus:placeholder-transparent focus:outline-none" :placeholder="$t('topic_search_placeholder')" v-model="topic.topic">
      <a class="bg-slate-600 rounded-lg mb-2 p-2 text-white" :href="next_topic">{{ $t('search') }}</a>
      </div>
    </div>

</section>


<div :dir="$t('dir')" class="bg-white grid mx-auto w-fit grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 my-2 md:my-4 p-2">
  <div class="p-2" v-for="topic in topics" >
    <a class="text-center text-slate-600 text-s md:text-l" :href="localePath('/topics/'+topic)" >{{topic}}</a>
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
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');


body {
background-color: #f1f5f9;
}

</style>

