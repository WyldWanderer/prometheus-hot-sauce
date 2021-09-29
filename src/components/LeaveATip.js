import React from 'react'
import qrcode from '../rawData/images/MyVenmoQRCode.png'

const LeaveATip = () => {
    return(
        <>
            <h2>I love making hot sauce to fuel my fire and I love getting to share what I make with others. That's why I don't charge for the sauces, 
                I just ask for feedback on what people like, and to return the bottles once they are empty. However, if you like the sauce and would like to help keep things going,
                use the camera on your phone to scan my QR code below for a link to send a tip. Thanks and enjoy the heat!</h2>

            <img src={qrcode} height="300px" width="300px" class="center"/>
        </>
    )
}

export default LeaveATip