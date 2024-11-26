import { Nav } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <>
            <header className="App-header"><h1>Autó webáruház</h1></header>
            <Nav variant="tabs" activeKey="/home">
                <Nav.Item>
                        <Nav.Link href="/">
                            Public
                        </Nav.Link>
                        <Nav.Link href="/admin">
                            Admin
                        </Nav.Link>
                </Nav.Item>
            </Nav>
            <article>
                <Outlet />
            </article>
        </>
    )
}

export default Layout
