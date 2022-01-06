import { useState } from 'react'

import jeremyAvatar from '../../assets/image-jeremy.png'
import pointersIcon from '../../assets/icon-ellipsis.svg'

import Data from '../../data.json'

import styles from  './styles/styles.module.scss'

import './styles/cards.scss'

export function Dashboard(){

    const [time, setTime] = useState<String>('weekly')
    

    function handleClickMenuOptions(event: String){
       setTime(event)     
    }

    return(
        <div className={styles.container}>
            <div className={styles.mainCard}>  
                <div className={styles.reportDescription}>
                    <img src={jeremyAvatar} alt="Imagem de Jeremy" />
                    <div>
                        <p>Report for</p>
                        <div className={styles.name}>Jeremy Robson</div>
                    </div>

                </div>
                <div className={styles.menu}>
                    <button 
                        className = {time === 'daily' ? styles.linkActive : ''} 
                        onClick={()=>handleClickMenuOptions('daily')}> 
                        Daily
                    </button>
                    <button 
                        className = {time === 'weekly'? styles.linkActive : ''} 
                        onClick={()=>handleClickMenuOptions('weekly')}>
                        Weekly
                    </button>
                    <button 
                        className={time === 'montly' ? styles.linkActive : ''}
                        onClick={()=>handleClickMenuOptions('montly')}>
                        Montly
                    </button>
                </div>
            </div>
                {Data.map(cards =>(
                    <div key={cards.title} className={styles.card} id={cards.title.toString().toLowerCase().replace(/\s+/g, '-')}>
                        <div className={styles.cardDescription}>
                            <div>
                                <div className={styles.cardName}>{cards.title}</div>
                                <div className={styles.pointers}><img src={pointersIcon} alt="" /></div>
                            </div>
                            <div>
                                <div className={styles.hours}>
                                    {  
                                        time === 'daily' ? (cards.timeframes.daily.current + 'hrs') : 
                                        time === 'weekly' ? (cards.timeframes.weekly.current + 'hrs') :
                                        time === 'montly' ? (cards.timeframes.monthly.current + 'hrs') : ''
                                    }
                                </div>
                                <div className={styles.description}>
                                    {
                                    time === 'daily' ? 'Last Day - ' + (cards.timeframes.daily.previous + 'hrs') : 
                                    time === 'weekly' ? 'Last Week - ' + (cards.timeframes.weekly.previous + 'hrs') :
                                    time === 'montly' ? 'Last Month - ' + (cards.timeframes.monthly.previous + 'hrs') : ''  
                                    }
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
        </div>
    )
}