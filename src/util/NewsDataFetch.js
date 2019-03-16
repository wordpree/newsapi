const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6352c20ad9204ab181b8a82ac99d0299";

export let newsDataFetch = ()=>{
  return fetch(url).then(response=>response.json())
                   .then(resJson => resJson.articles );
                   //.catch(err=>console.log(err));
  }
