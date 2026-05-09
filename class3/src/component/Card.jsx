import "../styles/Card.css"


function Card ({img, title,link}){
    
    
    return (
        <>
            <div id="card"> 
                <img src={img} alt=""  />
                <p id="title">{title}</p>
                <p id="link">{link}</p>
            </div>
        </>
    )
}
export default Card