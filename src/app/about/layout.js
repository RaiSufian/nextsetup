import Link from "next/link";
const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Link href="/about/student">Student About us</Link>
                <Link href="/about/teacher">teacher About us</Link>
                <br />
                this is about page
            </div >
            {children}
        </>
    )
}
export default Layout;