function Card(props){
    return(
        <div className="col-md-4">
            <a href={'/detail/'+props.i}>
                <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) + '.jpg'} width="80%"/>
            </a>
            <h4>{ props.shoes[props.i].title }</h4>
            <p>{ props.shoes[props.i].price }원</p>
        </div>
    )
}

export default Card;