<template>
  <div class="h-screen w-screen flex flex-col gap-4">
  <header class="items-center bg-white shadow border-t-4 border-slate-700">
  <div class="flex flex-1 items-center p-3">
    <NuxtLink class="flex items-center font-mono tracking-tighter text-slate-700 hover:text-slate-800" :to="localePath('/')">
      <svg class="w-10 mr-2" fill="currentColor" viewBox="0 0 121.5 114.7" xmlns="http://www.w3.org/2000/svg">
        <path d="m 0.5 65 c -5 -62.5 77.5 -92.5 110 -30 h -17.5 c -7.5 -20 -62.5 -37.5 -76.25 15 h 40 l 65 65 h -21.25 l -10 -10 c -35 22.5 -75 5 -85 -25 h 17.5 c 7.5 15 30 27.5 55.75 13.75 l -28.25 -28.75 z m 70 -15 h 43.5 c 1.5 5 1.5 20 -7 36.5 z"/>
      </svg>
      <pre class="font-mono font-bold text-sm">{{ $t('title') }}</pre>
    </NuxtLink>
  </div>
  <nav class="absolute top-0 right-0 mt-3 md:w-auto py-1 px-2">
    <ul class="flex justify-end items-start text-slate-900 text-sm text-center">
      <li class="md:w-auto mx-2 px-2 bg-white border border-slate-300 rounded">
        <div class="w-16 md:w-24">
          <a href="#" class="block py-1 px-1" @click.prevent="nav.lang=!nav.lang">{{locales.map(i=>i.name)[locales.map(i=>i.code).indexOf(locale)]}}</a>
          <ul v-if="nav.lang" class="my-2 text-sm leading-loose text-center">
						<li v-for="locale in availableLocales" ><NuxtLink :key="locale.code" :to="switchLocalePath(locale.code)">{{locale.name}}</NuxtLink></li>
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
  <img class="w-1/2 h-1/2 object-contain mx-auto" src='/404.svg' />
  <NuxtLink to="/" class="mx-auto p-2 rounded-lg bg-stone-100 text-white bg-slate-400 text-xs md:text-l font-bold">Go Home</NuxtLink>
  </div>
</template>

<script setup>
import { useI18n } from '#imports'

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const nav = reactive({ lang: false })

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

