import { useState, useEffect } from 'react'
import Header from './components/Header'
import Data from './components/Data'
import Navbar from './components/Navbar'
import Bottom from './components/Bottom'
import Footer from './components/Footer'

function App() {
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);

    const [content, setContent] = useState('');

  useEffect(()=>{
    getData()
    getImage()
    
  }, [])

  //Fetch Data
  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return data
  }

  //Get Data
  const getData = async () => {
    const dataFromServer = await fetchData()
    setData(dataFromServer)
  }

  //Fetch Image
  const fetchImage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const image = await res.json()

    return image
  }

  //Get Image
  const getImage = async () => {
    const imageFromServer = await fetchImage()
    setImage(imageFromServer)
  }

  return (
    <>
   
        {/* <Header /> */}
        <Navbar data={data} setContent={setContent} image = {image}  />
        <div className="container">
          <Data data={data} content={content} />
          <Bottom />
        </div>
        <Footer />
    </>
  );
}

export default App;
