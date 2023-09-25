import { create } from 'apisauce'



// define the api
const api = create({
    baseURL: 'https://newsapi.org/v2',
    headers: { Accept: 'application/vnd.github.v3+json' },
  })
const apiKey='?country=us&apiKey=38991ae9639c48cb8c4319670b122c76'
const getTopHeadline=api.get('/top-headlines'+apiKey)
const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=38991ae9639c48cb8c4319670b122c76")

export default{
  getByCategory,
  getTopHeadline
}