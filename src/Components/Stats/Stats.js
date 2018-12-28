import React from 'react'
import Card from './Card/Card';
import './Stats.scss';

const Stats = () => {
  return (
        <div className="card-background">
        
            <div className = 'card-container'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Stats;
