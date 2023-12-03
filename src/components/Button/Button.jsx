function PrimaryButton(props) {
  return (
    <>
      <a href={props.link} className={`btn ${props.sizeButton ? props.sizeButton : "btn-sm"} bg-gradient border-primary text-white px-5 py-1.5 rounded-full font-semibold capitalize hover:opacity-90 transition-all duration-300`}>
        {props.textButton}
      </a>
    </>
  );
}

function TertiaryButton(props) {
  return (
    <>
      <a href={props.link} className={`btn ${props.sizeButton ? props.sizeButton : "btn-sm"} border-primary text-primary bg-white px-5 py-1.5 rounded-full font-semibold capitalize hover:opacity-90 hover:bg-white hover:border-primary transition-all duration-300`}>
        {props.textButton}
      </a>
    </>
  );
}

function OutlineButton(props) {
  return (
    <>
      <a
        href={props.link}
        className={`btn ${props.sizeButton ? props.sizeButton : "btn-sm"} ${
          props.colorButton ? props.colorButton : "border-white text-white"
        } bg-transparent px-5 py-1.5 rounded-full font-semibold hover:opacity-90 hover:bg-white hover:border-primary hover:text-primary transition-all duration-300 normal-case`}
      >
        {props.textButton} {props.iconButton}
      </a>
    </>
  );
}

export { PrimaryButton, TertiaryButton, OutlineButton };
