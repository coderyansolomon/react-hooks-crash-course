import Link from "next/link";

const navItems = [
    {label: 'Home', path: '/'},
    {label: 'State Hooks', path: 'state-hooks'},
    {label: 'Context Hooks', path: 'context-hooks'},
    {label: 'Ref Hooks', path: 'ref-hooks'},
    {label: 'Effect Hooks', path: 'effect-hooks'},
    {label: 'Performance Hooks', path: 'performance-hooks'},
    {label: 'Custom Hooks', path: 'custom-hooks'},

]

const navStyles = {
    listStyleType: 'none', 
    position: 'absolute', 
    width: '100vw', 
    padding: '40px',
    display: 'flex',
    justifyContent: 'space-evenly'
}

export default function Header(){
    return (
        <header>
            <nav>
                <ul style={navStyles}>
                    {
                        navItems.map((item) => (
                            <Link key={item.label} href={item.path}>
                                <li>
                                {item.label}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}