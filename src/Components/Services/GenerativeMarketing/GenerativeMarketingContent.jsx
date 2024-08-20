import React from 'react'
import PercentageCounter from '../PercentageCounter'
import MarketingServices from './MarketingServices'
import MarketingAgent from './MarketingAgent'
export default function GenerativeMarketingContent() {
    return (
        <>
            <div className="marginSet">
                <PercentageCounter />
            </div>
            <div className="marginSet">
                <MarketingServices/>
                <MarketingAgent/>
            </div>
        </>
    )
}
