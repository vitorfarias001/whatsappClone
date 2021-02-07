import { Avatar } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat/SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="header">

                
                <div className="headerRight">
                    <DonutLarge />
                    <Chat />
                    <MoreVert />
                </div>

            </div>
            <div className="search">
                <SearchOutlined />
                <input placeholder="Busce contatos ou conversas" type="text" />
            </div>
            <div className="chats">
               <h1 className="chatTitle">Recentes</h1>
                <SidebarChat />  
            </div>
        </div>
    );
}

export default Sidebar;