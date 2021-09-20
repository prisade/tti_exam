import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';

const Navbar = ({ data, onClick, setContent, image }) => {
    const [sidebar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sidebar)

    const navDisplay = () => {
        const displayNav = data.map((value) => {
            let getImg = getImage(value.id) 
            return(
                <li key={value.id.toString()} onClick={() => {setContent({title: value.title,body: value.body})
                }}>
                        <img className="navImg" src={getImg} />
                        <span>{value.title}</span>
                </li>
            )
        })
        
        return displayNav
    }

    const getImage = (id) => {
        const imageUrl = image.filter(value => value.id === id)
        if(imageUrl.length > 0){
            return imageUrl[0].thumbnailUrl
        }else{
            return 'https://via.placeholder.com/150/6ffa50'
        }
        
    }

    return (
        <>
        <div className = "navbar">
            <FaIcons.FaBars onClick = {showSideBar} />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle' onClick = {showSideBar}>
                    < AiIcons.AiOutlineClose/>
                </li>
                {navDisplay()}
            </ul>
        </nav>
        </>
    )
}

export default Navbar
