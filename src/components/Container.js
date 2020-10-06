import React from 'react'
import ListItem from './Listitem'

export default function Container(props) {

    const showGames = () => {
        return props.games.map(game => <ListItem key={game.name} game={game}/>)
    }
    
    return (
        <ul className="game-list">
            {showGames()}
        </ul>
    )
}