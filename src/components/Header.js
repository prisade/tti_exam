const Header = () => {
    return (
        <header style={headingStyle} className="p-5 text-center bg-image fixed-top">
        </header>
    )
}

const headingStyle = {
    backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')",
    height: 200,
    zIndex: -1
}

export default Header
