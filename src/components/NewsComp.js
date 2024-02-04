import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export function NewsComp(props) {
  const [ns,setNs]=useState({
    articles:[],
    page:1
  })
  const func=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=1&pageSize=9&apiKey=${props.apikey}`;
    
    let data = await fetch(url);
    let pdata =await  data.json();
    console.log("helloooooooooooooo");
    setNs({ articles: pdata.articles })
  }
  useEffect( ()=>{
    func();
 },[])

  const handlep = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${ns.page-1}&pageSize=9&apiKey=${props.apikey}`
    let data = await fetch(url);
    data = await data.json();
    console.log(data);
   setNs({ articles: data.articles })
   setNs(
      {
        page: ns.page - 1,
        articles: data.articles
      }
    )
  }
  const handleN = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${ns.page+1}&pageSize=9&apiKey=${props.apikey}`
    let data = await fetch(url);
    data = await data.json();
    console.log(data);
    setNs({ articles: data.articles })
    setNs(
      {
        page:ns.page + 1,
        articles: data.articles
      }
    )
  }
    return (
      <div class="comp" style={{ marginLeft: '10rem',marginRight: '10rem' }}>
        <div class="text-center my-4">
          <h2> {(props.category).toUpperCase()} NEWS</h2>
        </div>

        <div className="row">
          {ns.articles.map((element) => {
            console.log(element);
            return (
              <div className="col-md-4" style={{padding:'0px'}} >
                <Newsitem author={element.author} date={element.publishedAt} Nurl={element.url} title={element.title ? element.title.slice(0, 40) : ""} discription={element.description ? element.description.slice(0, 88) : ""} url={element.urlToImage}></Newsitem>
              </div>

            )
          })}

        </div>
        <nav aria-label="...">
          <ul class="pagination d-flex justify-content-between">
            <li class='page-item' >

              <button className='btn btn-primary' disabled={ns.page <= 1} onClick={handlep}>&larr; previous</button>
            </li>

            <li class="page-item">
              <button className='btn btn-primary' disabled={ns.page >= 5} onClick={handleN}> Next&rarr;</button>
            </li>
          </ul>
        </nav>
      </div>
    )
}
// defaultProps={
//   country:'in',
//   pageSize:5,
//   category:'sports'
// }
export default NewsComp
