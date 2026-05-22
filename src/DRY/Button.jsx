function Button({className, text, title, value, type, children, onClick}) {

return (
    <>
        <button className={className} onClick={onClick} type={type} value={value} title={title}>{children || text}</button>
    </>
)

}

export default Button