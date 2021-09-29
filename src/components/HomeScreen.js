import React from "react"
import HotSauceCard from "./HotSauceCard"

const HomeScreen = (props) => {
    return(
        <>
            <h2 class="title">Our Story</h2>
            <p>
                Food in my family has always been a way to show friendship and make people feel at home. 
                Strangely, despite the heat and tears that come from most of these sauces, they still are meant to bring people together
                in our common love of all things spicy.
            </p>
            <p>
                You can check out what is coming next by clicking on the "Next Batch" link above as well as help support us and future hot sauce shenanigans by clicking the "Leave A Tip" link at the top of the page.
            </p>
            <br/>
            <br/>
            <h3 class="title">Searching for some inspiration? Check out what we've made in the past, if a sauce sticks out let me know and I'll try to work it into a future batch. </h3>
            <HotSauceCard sauces={props.sauces}/>
        </>
    )
}

export default HomeScreen