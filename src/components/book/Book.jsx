const Book = ({title, author, url, type, price}) => {

    return(
        <figure>
            <h4>{title} <i>by {author}</i></h4>
            <h6>&euro; {price}</h6>
            <img src={url} alt={`${title}-book`} />
            <figcaption>{type || 'tipo nera'}</figcaption>
        </figure>
    )
    
}

export default Book;