import './Component.css'

interface Props{
  textToRender: string
}

const Component: React.FC<Props> = ({ textToRende }) => {
  return ( 
    <div>{textToRender}</div>
   );
}
 
export default Component;