import React from "react"
import {createRoot} from "react-dom/client"
import App from './App'
import Nav from "./function base/Nav"

import Image from "./function base/Image"
import Footer from "./function base/Footer"
import About from "./class base/About"
createRoot(document.getElementById('root')).render(
<>
<App />
<Nav />
<Image />
<Footer />
<About />
</>)