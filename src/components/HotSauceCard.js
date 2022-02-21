import React from 'react'

const HotSauceCard = (props) => {
    const sauceInfo = Object.values(props.sauces)
    console.log(props)
    return(
        <>
        {sauceInfo.map((sauce) => {
            return (<div>
                        <img width="500" length="500" src={sauce.image} />
                        <h3 class="title">{sauce.name}</h3>
                        <h4>{sauce.description}</h4>
                        <h4>Goes Great With: {sauce.bestOn}</h4>
                    </div>)
        })}
        </>
    )
}

export default HotSauceCard