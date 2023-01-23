import { Header, Nav, NavItem} from "./AppBar.styled";

const navItems = [
{href: 'home', text: 'Home'},
{href: 'movies', text: 'Movies'},
];


export const AppBar = () => {
    return (<>
            <Header>
                <Nav>
                    {navItems.map(({text, href}) => <NavItem to={href} key={href}>{text}</NavItem>)}
                </Nav>
        </Header>
    </>
    );
}