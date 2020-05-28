import React, { useState } from "react";


const README = ({ user, repo }) => {
    const[toggle, setToggle] = useState(false)
    console.log(user, repo)
    return(
        <div>README LOADED</div>
    )
}

export default README;