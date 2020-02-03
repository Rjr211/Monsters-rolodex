import React, {Component} from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.js'


/*Functional component */
export const CardList = props => (
<div className='card-list'>
 {props.monsters.map(monster => (
     <Card key={monster.id} monster={monster} />
  ))}
    </div>
)
