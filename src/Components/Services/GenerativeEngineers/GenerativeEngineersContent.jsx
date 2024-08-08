import React from 'react'
import PercentageCounter from '../PercentageCounter'
import EngineeringAIServices from './EngineeringAIServices'
import EngineersDevelop from '../GenerativeConsulting/EngineersDevelop'

export default function GenerativeEngineersContent() {
    return (
        <>
            <div className="marginSet">
                <PercentageCounter />
                <EngineeringAIServices/>
                <EngineersDevelop/>
            </div>
        </>
    )
}
