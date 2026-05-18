

interface props {
    name: string,
    link: string
}
const Card = (a:props) => {
  return (
    <div className='w-75 h-75 hr bg-yellow-200 rounded-2xl p-5 '>
        <img src={a.link} alt=""  className='w-full h-[90%] rounded-xl mb-2'/>

        <h1>{a.name}</h1>

    </div>
  )
}

export default Card
