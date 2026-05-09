import "./styles/App.css"
import Navbar from "./component/Navbar"
import Card from "./component/Card"

function App() {
  const cards = [
    {
      img: "image.avif",
      title: "moutain",
      link: "read more"
    },
    {
      img: "image2.avif",
      title: "sofa",
      link: "read more"
    },
    {
      img: "image3.avif",
      title: "space earth view",
      link: "read more"
    },

  ]
  return (
    <>
     <div id="main">
      {
        cards.map((item, index)=>{
          return <Card key={index} img={item.img}  title={item.title} link={item.link}/>
        })
      }
      
     </div>
    </>

  )
}

export default App

