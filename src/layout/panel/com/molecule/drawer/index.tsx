import React from 'react'
import { elastic as Menu } from 'react-burger-menu'
const showSettings =  (event:  React.MouseEvent<HTMLAnchorElement>) => {
	event.preventDefault()
}
const SideMenu = () => (
	<Menu>
		<a id="home" className="menu-item" href="/">Home</a>
		<a id="about" className="menu-item" href="/about">About</a>
		<a id="contact" className="menu-item" href="/contact">Contact</a>
		<a onClick={showSettings} className="menu-item--small" href="">Settings</a>
	</Menu>
)

export default SideMenu
