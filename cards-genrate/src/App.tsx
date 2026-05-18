import  { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [data, setData] = useState([])

  const getData = () => {
    try {
      if (data.length === 0) {
        fetch("https://picsum.photos/v2/list/").then(res => res.json()).then(res => setData(res))
      }
      else {
        setData([])
      }
    } catch (error) {

      console.log(error)
    }
  }


  interface items {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string

  }
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <div className='flex justify-center items-center gap-3 mb-4 flex-nowrap  w-full overflow-x-auto'>
        {
          data.map((item: items, index) => {
            return <Card key={index} link={item.download_url} name={item.author} />
          })
        }
      </div>
      <button className='px-2 py-1 bg-blue-400 text-white rounded-xl' onClick={() => getData()}>{data.length === 0 ? "get data" : "hide data"}</button>
    </div>
  )
}

export default App
