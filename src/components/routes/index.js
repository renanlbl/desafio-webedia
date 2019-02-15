import React from 'react'
import { Route } from 'react-router-dom'
import NoticiasEmDestaque from '../noticias-em-destaque'
import NoticiasDoBrasil from '../noticias-do-brasil'
import NoticiasDoEua from '../noticias-do-eua'
import NoticiasDaArgentina from '../noticias-da-argentina'
import NoticiasDaFranca from '../noticias-da-franca'


const Routes = ( {noticiasEmDestaque} ) => (
    <div>
        <Route path="/noticias-em-destaque" render={() => <NoticiasEmDestaque noticiasEmDestaque={noticiasEmDestaque} />} />
        <Route path="/noticias-do-brasil" render={() => <NoticiasDoBrasil />} />
        <Route path="/noticias-do-eua" render={() => <NoticiasDoEua />} />
        <Route path="/noticias-da-argentina" render={() => <NoticiasDaArgentina />} />
        <Route path="/noticias-da-franca" render={() => <NoticiasDaFranca />} />        
    </div>
)

export default Routes