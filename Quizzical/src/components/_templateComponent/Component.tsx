import './Component.css'

interface Props{
  textToRender: string
}

const Component: React.FC<Props> = ({ textToRender }) => {
  return ( 
    <div>{textToRender}</div>
   );
}
 
export default Component;