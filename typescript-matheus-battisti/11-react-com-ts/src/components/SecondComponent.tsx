type Props = {
  name: string;
}

function SecondComponent(props: Props) {
  return (
    <p>O nome dele é {props.name}</p>
  )
}

export default SecondComponent