import React from "react"

var curYear= new Date().getFullYear();

function Footer()
{
  return <footer>
    <p>copyright @ {curYear} </p>
  </footer>
}

export default Footer;