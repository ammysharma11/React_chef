import chefLogo from "./images/chef-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefLogo}/>
            <h1>Chef </h1>
        </header>
    )
}