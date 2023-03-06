import React from  "react"
import "./flipkart.css"

const Flipkart=()=>{
    return(<>
    <nav>
        <div id={STYLE.id1}>Flipkart
        <input type="Search" value="Search for product"  /> Go </div>
        <div id={STYLE.id2}>
            <ul>
                <li>
                    <a href="">Sign in</a>
                </li>
                <li>
                    <a href="">men</a>
                </li>
                <li>
                    <a href="">women</a>
                </li>
                <li>
                    <a href="">kids</a>
                </li>
            </ul>
        </div>
        </nav>
        </>

    )
}
export default Flipkart