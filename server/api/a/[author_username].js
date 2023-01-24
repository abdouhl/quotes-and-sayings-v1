import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
const {author_username} = event.context.params


const client = serverSupabaseClient(event)
const { data, error } = await  client.from('authors').select("*").eq('screen_name', author_username)

    return  {"data":data[0]}
})

