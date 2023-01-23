import { serverSupabaseClient } from '#supabase/server'
import { registerFont, createCanvas, Image } from 'canvas'
import drawMultilineText from 'canvas-multiline-text'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';
import ImgD from 'image-data-uri'
import { join } from "path"

export default defineEventHandler(async (event) => {
const {quote_key} = event.context.params


registerFont(join(process.cwd(),"public","fonts","Tajawal-Medium.ttf"), { family: 'Tajawal' })

console.log(quote_key)
const client = serverSupabaseClient(event)
const { data:quote, error } = await  client.from('quotes').select("*").eq('key', parseInt(quote_key))

const quote_text = quote[0].text
const author_username = quote[0].username

const { data:author } = await  client.from('authors').select("*").eq('screen_name', author_username)

const profile_image_url = author[0].profile_image
const author_name = author[0].name


const canvas = createCanvas(800, 418)
const ctx = canvas.getContext('2d')

const profile_image = new Image();
profile_image.onload = () => ctx.drawImage(profile_image, 0, 0,profile_image.width,profile_image.height,0,0,418,418)
const profile_imageData = await ImgD.encodeFromURL(profile_image_url)
profile_image.src = profile_imageData


const gradient_image = new Image();
gradient_image.onload = () => ctx.drawImage(gradient_image, 0, 0,gradient_image.width,gradient_image.height,0,0,800,800)
const gradient_imageData = await ImgD.encodeFromURL("https://www.quotesandsayings.net/angryimg.png")
gradient_image.src = gradient_imageData

ctx.fillStyle = "white";
ctx.textAlign = "center";
const fontSizeUsed = drawMultilineText(
    ctx,
    quote_text,
    {
        rect: {
            x: 600,
            y: 20,
            width: 360,
            height: 300
        },
        font: 'Tajawal',
        verbose: true,
        minFontSize: 1,
        maxFontSize: 120
})


// name
ctx.font = 'bold 15px Tajawal';
await fillTextWithTwemoji(ctx,author_name, 600, 380);


// username
ctx.fillStyle = "rgb(83, 100, 113)";
ctx.textBaseline = 'top'
ctx.font = '10px Tajawal';
ctx.fillText('@'+author_username, 600, 390);

  return  canvas.createPNGStream()
})



