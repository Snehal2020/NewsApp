import React from 'react'

export function Newsitem(props) {
        return (
           
            <div className=' me-1'>
                <div class="card " style={{margin:'1rem'}}>
                    <img src={props.url} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.discription}</p>
                            <hr />
                            <p class="card-text">By -{props.author} On-{new Date (props.date).toGMTString()}</p>
                            <a href={props.Nurl} class="btn btn-dark " style={{padding:'4px'}}>Read more</a>
                        </div>
                </div>
            </div>
        )
}

export default Newsitem
