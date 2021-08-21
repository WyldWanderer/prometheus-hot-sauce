import React from 'react'


const HotSauceCard = (props) => {
    const sauceInfo = Object.values(props.sauces)
    return(
        <>
        {sauceInfo.map((sauce) => {
            return (<div>
                        <img src={sauce.image} />
                        <h3>{sauce.name}</h3>
                        <h4>{sauce.description}</h4>
                    </div>)
        })}
        </>
    )
}

export default HotSauceCard