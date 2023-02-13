<script setup>
import { useI18n } from '#imports'
import { until } from '@vueuse/core'

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const nav = reactive({ lang: false })

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
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
        <div
          class="mx-auto w-fit h-fit relative"
        >
          <img
            class="rounded-lg border w-6/12 mx-auto"
            src="/banner.png"
          />
          <img
            class="rounded-full border border-2 border-white h-16 md:h-28 mx-auto absolute -bottom-8 md:-bottom-14 left-1/2 -translate-x-8 md:-translate-x-14"
            src="/p_i.jpeg"
          />
        </div>

        <h3 class="text-center pt-2 md:text-xl mt-8 md:mt-14">
          Quotes and Sayings
          
          <Icon name="material-symbols:verified" class=" text-sky-500 text-sm " />
        </h3>
        <p class="text-center text-gray-500 text-xs">
          @q_and_s_net
        </p>
        <h1 class="font-bold pt-2 text-xl md:text-2xl mt-8 md:mt-14 ">- Licensing</h1>
        <p class="font-bold pt-2 md:text-xl">- Under MIT License</p>
        <p class="pt-2 md:text-xl">Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:</p>
         <p class=" pt-2 md:text-xl">The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.</p>
         <p class=" pt-2 md:text-xl">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</p>
          
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
    "description": "Handpicked collection of the best quotes and tweets by ",
    "dir": "ltr"
  },
  "es": {
    "quotes": "Citas",
    "description": "Colección cuidadosamente seleccionada de las mejores citas y tweets por ",
    "dir": "ltr"
  },
  "fr": {
    "quotes": "Citations",
    "description": "Collection triée sur le volet des meilleures citations et tweets de ",
    "dir": "ltr"
  },
  "de": {
    "quotes": "Zitate",
    "description": "Handverlesene Sammlung der besten Zitate und Tweets von ",
    "dir": "ltr"
  },
  "pt": {
    "quotes": "Citações",
    "description": "Coleção escolhida a dedo das melhores citações e tweets por ",
    "dir": "ltr"
  },
  "ar": {
    "quotes": "أقوال",
    "description": "مجموعة منتقاة بعناية من أفضل اقتباسات وتغريدات ",
    "dir": "rtl"
  }
}
</i18n>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

body {
  background-color: #f1f5f9;
}
</style>

