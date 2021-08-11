import { NavbarLanding } from '../../components/navbarlanding/navbar'
import './landing.css'

export const LandingPage = () => {
    return (
        <div className="main">
            <NavbarLanding></NavbarLanding>
            <img className="background" src="https://images.unsplash.com/photo-1599420186917-468a49a78a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="" />
        </div>

    )
}