import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Colorizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={props.handleAddRow}>Add Row</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={props.handleAddColumn}>Add Column</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={props.handleRemoveRow}>Remove Row</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={props.handleRemoveColumn}>Remove Column</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Color
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => props.handleColorChange("red")} dropDownValue="red">
                  Red
                </DropdownItem>
                <DropdownItem onClick={() => props.handleColorChange("green")} dropDownValue="green">
                  Green
                </DropdownItem>
                <DropdownItem onClick={() => props.handleColorChange("blue")}>
                  Blue
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => props.handleColorChange("default")}>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#" onClick={props.handleFillUncolored}>Fill Uncolored</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={props.handleFillAll}>Fill All</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={props.handleClearAll}>Clear All</NavLink>
            </NavItem>
          </Nav>
          <NavLink href="https://www.techtalentpipeline.nyc/">TTP</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
