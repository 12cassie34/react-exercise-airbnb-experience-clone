import airbnbLogo from './images/airbnb-logo.png'

function TheHeader() {
    return (
        <header className="header">
            <a href="https://www.airbnb.com.tw/" target="_blank" rel="noopener noreferrer">
                <img src={airbnbLogo} alt="Airbnb Logo" />
            </a>
        </header>
    )
}

export default TheHeader