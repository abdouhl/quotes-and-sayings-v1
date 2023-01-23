import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
const {quote_key} = event.context.params


const client = serverSupabaseClient(event)
const { data, error } = await  client.from('quotes').select("*").eq('key', parseInt(quote_key))


const author= await $fetch(useRuntimeConfig().apiUrl+"user_for_quotes/"+data[0]["username"])

  return  {"author":author,"quote":data[0]}
})

