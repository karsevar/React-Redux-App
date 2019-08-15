import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const characterLabel = createLabel("users", "Characters")
const locationLabel = createLabel('user', 'Locations')


const panes = [
  { menuItem: <Menu.Item key='characters' as={Nav} to={`/`} content={characterLabel} /> },
  { menuItem: <Menu.Item key='locations' as={Nav} to={'/locations'} content={locationLabel} />}
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav