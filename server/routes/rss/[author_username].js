import RSS from "rss";


export default defineEventHandler(async (event) => {

const {author_username} = event.context.params


const data = await $fetch("https://www.quotesandsayings.net/api/a_q/"+author_username+'?lang=en')
 

var feed = new RSS({
  title: data.author.name+" Quotes",
  description: "the latest "+data.author.name+" Quotes",
  id: "https://www.quotesandsayings.net/quotes/"+author_username,
  url: "https://www.quotesandsayings.net/quotes/"+author_username,
  language: "en"
});
 
for(var quote of data.quotes_list) {
//tshirt
  feed.item({
    title: data.author.name+" Quote",
    url: "https://www.quotesandsayings.net/quotes/"+author_username+'-'+quote.key,
    description: data.author.name+" Quote: "+quote.text,
    enclosure: {url:"https://8ooim6.deta.dev/p/"+quote.key,'type' : 'image/png'}, // optional enclosure
});

}

var xml = feed.xml();
 

  return  xml
})

