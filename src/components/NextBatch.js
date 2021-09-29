import React from "react"
import HotSauceCard from "./HotSauceCard"

const NextBatch = (props) => {
    return(
        <>
            <h2 class="title">Check out what is coming soon! Want to help? Consider leaving a tip through the link above to support the next round.</h2>
            <div>    
                {props.sauces[1].name ? <HotSauceCard sauces={props.sauces}/> : <h1 align="center">Not sure what's next, check back soon!</h1>} 
            </div>
            <h2 align="center">If you have any questions feel free to reach out to prometheushotsauce@gmail.com </h2>
            {props.sauces[1].name ? <iframe class="center" src="https://docs.google.com/forms/d/e/1FAIpQLSdp9YmessBjdCAQcP1BYQYY8kVq-dDUjgEmnnDp3RhcFKmqqA/viewform?embedded=true" width="1000" height="1500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> : ""}
        </>
    )
} 

export default NextBatch