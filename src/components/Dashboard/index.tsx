import { useState } from 'react'

import jeremyAvatar from '../../assets/image-jeremy.png'
import pointersIcon from '../../assets/icon-ellipsis.svg'

import Data from '../../data.json'

import './styles/styles.scss'

export function Dashboard(){

    const [time, setTime] = useState<String>('weekly')
    

    function handleClickMenuOptions(event: String){
       setTime(event)     
    }

    return(
        <div className="container">
            <div className="main-card">  
                <div className="report-description">
                    <img src={jeremyAvatar} alt="Imagem de Jeremy" />
                    <div>
                        <p>Report for</p>
                        <div className="name">Jeremy Robson</div>
                    </div>

                </div>
                <div className="menu">
                    <button 
                        className={'link' + (time === 'daily' ? ' link-active' : '')} 
                        onClick={()=>handleClickMenuOptions('daily')}> 
                        Daily
                    </button>
                    <button 
                        className={'link' + (time === 'weekly' ? ' link-active' : '')} 
                        onClick={()=>handleClickMenuOptions('weekly')}>
                        Weekly
                    </button>
                    <button 
                        className={'link' + (time === 'montly' ? ' link-active' : '')}
                        onClick={()=>handleClickMenuOptions('montly')}>
                        Montly
                    </button>
                </div>
            </div>
            {
                Data.map(cards =>(
                    <div key={cards.title} className={`card ${cards.title.toString().toLowerCase().replace(/\s+/g, '-')}`}>
                        <div className="card-description">
                            <div>
                                <div className="card-name">{cards.title}</div>
                                <div className="pointers"><img src={pointersIcon} alt="" /></div>
                            </div>
                            <div>
                                <div className="hours">
                                    {  
                                        time === 'daily' ? (cards.timeframes.daily.current + 'hrs') : 
                                        time === 'weekly' ? (cards.timeframes.weekly.current + 'hrs') :
                                        time === 'montly' ? (cards.timeframes.monthly.current + 'hrs') : ''
                                    }
                                </div>
                                <div className="description">
                                    {
                                    time === 'daily' ? 'Last Day - ' + (cards.timeframes.daily.previous + 'hrs') : 
                                    time === 'weekly' ? 'Last Week - ' + (cards.timeframes.weekly.previous + 'hrs') :
                                    time === 'montly' ? 'Last Month - ' + (cards.timeframes.monthly.previous + 'hrs') : ''  
                                    }
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}