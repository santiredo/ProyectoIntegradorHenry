import './burger.css'

export default function BurgerButton ({handleViews}) {
    return (
        <div className="icon nav-icon-1" onClick={handleViews}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
    )
}