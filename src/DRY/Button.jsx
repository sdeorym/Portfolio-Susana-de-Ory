function Button({className, text, title, value, type}) {

return (
    <>
        <button className={className} type={type} value={value} title={title}>{text}</button>
    </>
)

}

export default Button