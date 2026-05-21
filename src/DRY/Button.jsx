function Button({className, text, title, value, type, children}) {

return (
    <>
        <button className={className} type={type} value={value} title={title}>{children || text}</button>
    </>
)

}

export default Button