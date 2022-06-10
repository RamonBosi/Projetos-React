export default function Icon({ className, iconName }){
    return(
        <div className = { className }>
            <span></span>
            <span className = 'material-icons'>{ iconName }</span>
        </div>
    )
}