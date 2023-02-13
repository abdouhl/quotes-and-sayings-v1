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
        <h1 class="font-bold pt-2 text-xl md:text-2xl mt-8 md:mt-14 ">- Privacy Policy</h1>
        <p class="pt-2 md:text-xl">At Quotes and Sayings, we take the privacy of our users seriously. This Privacy Policy outlines the information we collect, how it is used, and the measures we take to ensure that your personal information is protected. By using our website, you consent to the collection, use, and disclosure of your information in accordance with this Privacy Policy.</p>
         <p class="font-bold pt-2 md:text-xl">- Information Collection and Use</p>
         <p class=" pt-2 md:text-xl">We collect personal information such as your name, email address, and IP address when you create an account on our website or subscribe to our newsletter. This information is used to personalize your experience on our site, to send you updates and news about our services, and to improve the content and functionality of our website.</p>
          <p class="font-bold pt-2 md:text-xl">- Cookies and Analytics</p>
         <p class=" pt-2 md:text-xl">We use cookies and other tracking technologies to track your activity on our website and to collect aggregate information about usage and preferences. This information is used to improve the functionality and performance of our site, to understand user behavior, and to personalize content and advertising. You may choose to disable cookies in your browser settings, but this may limit your ability to use certain features of our website.</p>
          <p class="font-bold pt-2 md:text-xl">- Third-Party Services</p>
         <p class=" pt-2 md:text-xl">We may use third-party service providers to provide services such as website hosting, data analysis, payment processing, and email delivery. These third parties may have access to your personal information for the purpose of performing these services, but they are required to maintain the confidentiality of your information and may not use it for any other purpose.</p>
          <p class="font-bold pt-2 md:text-xl">- Disclosure of Information</p>
         <p class=" pt-2 md:text-xl">We will not sell, rent, or otherwise disclose your personal information to any third party, except as required by law or as necessary to provide you with the services you request.</p>
          <p class="font-bold pt-2 md:text-xl">- Security</p>
         <p class=" pt-2 md:text-xl">We take reasonable measures to protect your personal information from unauthorized access, theft, loss, or misuse. However, no security measures can guarantee 100% protection of your information, and we cannot guarantee the security of any information you transmit to us over the internet.</p>
          <p class="font-bold pt-2 md:text-xl">- Changes to This Policy</p>
         <p class=" pt-2 md:text-xl">We may modify this Privacy Policy from time to time to reflect changes in our practices or to comply with applicable laws. Your continued use of our website following the posting of any changes to this policy indicates your acceptance of those changes.</p>
          <p class="font-bold pt-2 md:text-xl">- Contact Us</p>
         <p class=" pt-2 md:text-xl">If you have any questions or concerns about this Privacy Policy, please contact us by email at contact@quotesandsayings.net. We will make every effort to respond to your inquiries in a timely manner.</p>
          
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

