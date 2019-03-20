

export let newsDataFetch = (searchType)=>{
  
  let url = `https://newsapi.org/v2/${searchType}?q=apple&apiKey=6352c20ad9204ab181b8a82ac99d0299`;
  return fetch(url).then(response=>response.json())
                   .then(resJson => {
                     if(resJson.articles)
                     {
                       return resJson.articles;
                     }else if (resJson.sources) {
                       return resJson.sources;
                     }
                   })
                   .catch(err=>console.log(err));
  }
