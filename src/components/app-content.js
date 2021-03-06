import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './header'
import Nav from './nav'
import Routes from './routes'
import Footer from './footer'

const AppContent = ({ 
    noticiasEmDestaque, 
    noticiasDoBrasil, 
    noticiasDoEua, 
    noticiasDaArgentina, 
    noticiasDaFranca, 
    pagination, 
    refreshAll, 
    refreshBr, 
    refreshEua, 
    refreshAr, 
    refreshFr,
    openMenu,
    openSearch,
    handleOpenMenu,
    handleCloseMenu, 
    handleOpenSearch,
    handleCloseSearch,
    carregando }) => (    
    <div>        
        <Header handleOpenMenu={handleOpenMenu} openSearch={openSearch} handleOpenSearch={handleOpenSearch} handleCloseSearch={handleCloseSearch} />      
        <Router> 
            <div>
                <Nav 
                refreshBr={refreshBr} 
                refreshAll={refreshAll} 
                refreshEua={refreshEua} 
                refreshAr={refreshAr} 
                refreshFr={refreshFr} 
                openMenu={openMenu}                 
                handleCloseMenu={handleCloseMenu}/>           
                <Routes                     
                    noticiasEmDestaque={noticiasEmDestaque} 
                    noticiasDoBrasil={noticiasDoBrasil}
                    noticiasDoEua={noticiasDoEua}
                    noticiasDaArgentina={noticiasDaArgentina}
                    noticiasDaFranca={noticiasDaFranca}
                    pagination={pagination}
                />
                {carregando && <div className="carregando">CARREGANDO...</div>}
            </div>
        </Router>    
        <Footer />      
    </div>
)

export default AppContent