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

            <div className="card work">
                <div className="card-description">
                    <div>
                        <div className="card-name">Work</div>
                        <div className="pointers"><img src={pointersIcon} alt="" /></div>
                    </div>
                    <div>
                        <div className="hours">
                            {  
                                time === 'daily' ? (Data[0].timeframes.daily.current + 'hrs') : 
                                time === 'weekly' ? (Data[0].timeframes.weekly.current + 'hrs') :
                                time === 'montly' ? (Data[0].timeframes.monthly.current + 'hrs') : ''
                            }
                        </div>
                        <div className="description">
                            {
                              time === 'daily' ? 'Last Day - ' + (Data[0].timeframes.daily.previous + 'hrs') : 
                              time === 'weekly' ? 'Last Week - ' + (Data[0].timeframes.weekly.previous + 'hrs') :
                              time === 'montly' ? 'Last Month - ' + (Data[0].timeframes.monthly.current + 'hrs') : ''  
                            }
                            
                        </div>
                    </div>

                </div>
            </div>
            <div className="card play">
                <div className="card-description">
                    <div>
                        <div className="card-name">Play</div>
                        <div className="pointers"><img src={pointersIcon} alt="" /></div>
                    </div>
                    <div>
                        <div className="hours">
                            {  
                                time === 'daily' ? (Data[1].timeframes.daily.current + 'hrs') : 
                                time === 'weekly' ? (Data[1].timeframes.weekly.current + 'hrs') :
                                time === 'montly' ? (Data[1].timeframes.monthly.current + 'hrs') : ''
                            }
                        </div>
                        <div className="description">
                            {
                              time === 'daily' ? 'Last Day - ' + (Data[1].timeframes.daily.previous + 'hrs') : 
                              time === 'weekly' ? 'Last Week - ' + (Data[1].timeframes.weekly.previous + 'hrs') :
                              time === 'montly' ? 'Last Month - ' + (Data[1].timeframes.monthly.current + 'hrs') : ''  
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className="card study">
                <div className="card-description">
                    <div>
                        <div className="card-name">Study</div>
                        <div className="pointers"><img src={pointersIcon} alt="" /></div>
                    </div>
                    <div>
                        <div className="hours">
                            {  
                                time === 'daily' ? (Data[2].timeframes.daily.current + 'hrs') : 
                                time === 'weekly' ? (Data[2].timeframes.weekly.current + 'hrs') :
                                time === 'montly' ? (Data[2].timeframes.monthly.current + 'hrs') : ''
                            }
                        </div>
                        <div className="description">
                            {
                              time === 'daily' ? 'Last Day - ' + (Data[2].timeframes.daily.previous + 'hrs') : 
                              time === 'weekly' ? 'Last Week - ' + (Data[2].timeframes.weekly.previous + 'hrs') :
                              time === 'montly' ? 'Last Month - ' + (Data[2].timeframes.monthly.current + 'hrs') : ''  
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className="card exercise">
                <div className="card-description">
                    <div>
                        <div className="card-name">Exercise</div>
                        <div className="pointers"><img src={pointersIcon} alt="" /></div>
                    </div>
                    <div>
                        <div className="hours">
                            {  
                                time === 'daily' ? (Data[3].timeframes.daily.current + 'hrs') : 
                                time === 'weekly' ? (Data[3].timeframes.weekly.current + 'hrs') :
                                time === 'montly' ? (Data[3].timeframes.monthly.current + 'hrs') : ''
                            }
                        </div>
                        <div className="description">
                            {
                              time === 'daily' ? 'Last Day - ' + (Data[3].timeframes.daily.previous + 'hrs') : 
                              time === 'weekly' ? 'Last Week - ' + (Data[3].timeframes.weekly.previous + 'hrs') :
                              time === 'montly' ? 'Last Month - ' + (Data[3].timeframes.monthly.current + 'hrs') : ''  
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className="card social">
                <div className="card-description">
                    <div>
                        <div className="card-name">Social</div>
                        <div className="pointers"><img src={pointersIcon} alt="" /></div>
                    </div>
                    <div>
                        <div className="hours">
                            {  
                                time === 'daily' ? (Data[4].timeframes.daily.current + 'hrs') : 
                                time === 'weekly' ? (Data[4].timeframes.weekly.current + 'hrs') :
                                time === 'montly' ? (Data[4].timeframes.monthly.current + 'hrs') : ''
                            }
                        </div>
                        <div className="description">
                            {
                              time === 'daily' ? 'Last Day - ' + (Data[4].timeframes.daily.previous + 'hrs') : 
                              time === 'weekly' ? 'Last Week - ' + (Data[4].timeframes.weekly.previous + 'hrs') :
                              time === 'montly' ? 'Last Month - ' + (Data[4].timeframes.monthly.current + 'hrs') : ''  
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className="card self-care">
                <div className="card-description">
                    <div>
                        <div className="card-name">Self Care</div>
                        <div className="pointers"><img src={pointersIcon} alt="" /></div>
                    </div>
                    <div>
                        <div className="hours">
                            {  
                                time === 'daily' ? (Data[5].timeframes.daily.current + 'hrs') : 
                                time === 'weekly' ? (Data[5].timeframes.weekly.current + 'hrs') :
                                time === 'montly' ? (Data[5].timeframes.monthly.current + 'hrs') : ''
                            }
                        </div>
                        <div className="description">
                            {
                              time === 'daily' ? 'Last Day - ' + (Data[5].timeframes.daily.previous + 'hrs') : 
                              time === 'weekly' ? 'Last Week - ' + (Data[5].timeframes.weekly.previous + 'hrs') :
                              time === 'montly' ? 'Last Month - ' + (Data[5].timeframes.monthly.current + 'hrs') : ''  
                            }
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}