function Button({className, text, title, value, type, children, onClick, aria}) {

return (
    <>
        <button className={className} aria-label={aria} onClick={onClick} type={type} value={value} title={title}>{children || text}</button>
    </>
)

}

export default Button