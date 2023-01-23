import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
const {author_username} = event.context.params
const lang = getQuery(event).lang?getQuery(event).lang:"en"

const client = serverSupabaseClient(event)
const { data, error } = await  client.from('quotes').select("*").eq('username', author_username).eq('lang', lang)



const author= await $fetch(useRuntimeConfig().apiUrl+"user_for_quotes/"+author_username)

  return  {"author":author,"quotes_list":data}
})

