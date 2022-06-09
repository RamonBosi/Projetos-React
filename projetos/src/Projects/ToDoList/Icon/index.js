export default function Icon({ componentIcon, iconName }){
    return(
        <div className = { componentIcon }>
            <span></span>
            <span className = 'material-icons'>{ iconName }</span>
        </div>
    )
}