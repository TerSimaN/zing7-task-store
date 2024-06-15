const Button = (props: {text: string, className: string}) => {
  return (
    <button className={props.className}>
        {props.text}
    </button>
  )
}

export default Button