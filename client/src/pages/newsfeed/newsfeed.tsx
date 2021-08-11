import './newsfeed.css'
import { Navbar } from '../../components/navbar/navbar';
import { useState } from "react";
import { NavLink } from "react-router-dom";



export const NewsfeedPage = () => {
    const database = [
        {
            id: "A001",
            img: "https://images.unsplash.com/photo-1622495546282-8c7cbcc40e3a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: "A002",
            img: "https://images.unsplash.com/photo-1627798012567-3ed38cc958da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
        },
        {
            id: "A003",
            img: "https://images.unsplash.com/photo-1627729115866-6320893092fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        },
        {
            id: "A004",
            img: "https://images.unsplash.com/photo-1627544594182-156d71af65fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            id: "A005",
            img: "https://images.unsplash.com/photo-1627844642677-8b30cb8fc636?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: "A006",
            img: "https://images.unsplash.com/photo-1627828939428-66f34bdf3bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: "A007",
            img: "https://images.unsplash.com/photo-1622495546282-8c7cbcc40e3a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: "A008",
            img: "https://images.unsplash.com/photo-1627798012567-3ed38cc958da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
        },
        {
            id: "A009",
            img: "https://images.unsplash.com/photo-1627729115866-6320893092fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        },
        {
            id: "A010",
            img: "https://images.unsplash.com/photo-1627544594182-156d71af65fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            id: "A011",
            img: "https://images.unsplash.com/photo-1627844642677-8b30cb8fc636?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: "A012",
            img: "https://images.unsplash.com/photo-1627828939428-66f34bdf3bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
    ]

    //render CV thứ currrentNumJob cho mục theo nghề nghiệp
    const [currentImage, setNumJob] = useState(database.length)
    const [JobCV, setJobCV] = useState(database.slice(0, currentImage));

    let imageList = database.map((data, index) => {
        return (
            <NavLink key={index} to={{ pathname: "/createcv", state: { id: index } }}>
                <div className="box">
                    <img src={data.img} alt="" />
                </div>
            </NavLink>
        )
    })

    return (
        <>
            <Navbar></Navbar>
            <div className="container" >
                    {imageList}
            </div>
        </>
    )
}