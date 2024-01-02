import { useState } from 'react';
import Header from '../Components/Header';
import SideBar from '../Components/SideBar'

const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true);
    const toggleDrawer = () =>{
        setOpenDrawer(prevState => !prevState);
    }
    return(
        <div>
            <Header toggleDrawer = {toggleDrawer}/>
            <SideBar openDrawer= {openDrawer}/>
            <div>Main Content</div>
        </div>
    )
}

export default Main;