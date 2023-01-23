import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

const {page_id} = event.context.params

const lang = getQuery(event).lang?getQuery(event).lang:"en"

const client = serverSupabaseClient(event)

let { count } = await client.from('authors').select('*', { count: 'exact' }).eq(lang, true)
let { data: authors, error } = await client.from('authors').select('*').eq(lang, true).order('followers_count', { ascending: false }).range((parseInt(page_id) -1)*12, (parseInt(page_id) -1)*12+11)

const pages_count = count%12==0 ? parseInt(count/12) :parseInt(count/12) +1

var pagintion_nums = []


if (parseInt(page_id) > 3 && parseInt(page_id) < pages_count-2){

pagintion_nums = [parseInt(page_id)-2,parseInt(page_id)-1,parseInt(page_id),parseInt(page_id)+1,parseInt(page_id)+2]

}else if(parseInt(page_id) <= 3 ){

pagintion_nums =[2,3,4,5,6]

}else if(parseInt(page_id) >= pages_count-2 ){

pagintion_nums =[pages_count-5,pages_count-4,pages_count-3,pages_count-2,pages_count-1]

}


  return  {"authors":authors,"pages_count":pages_count,"pagintion_nums":pagintion_nums}
})

