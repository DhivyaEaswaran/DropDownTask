import {useState} from 'react';
export default function ColorChanger(){
  const [colorChoosen, setColorChoosen]=useState('');
  const setColorChange=(e)=>{
    const newColor=e.target.value;
    setColorChoosen(newColor);
  };
  return (
    <div>
      <form>
        <select onChange={setColorChange} value={colorChoosen}>
          <option value="">Select</option>
          <option value="orange">Orange</option>
          <option value="#550A35">Purple Lily</option>
          <option value="#F8B88B">Pastel Orange</option>
          <option value="#583759">Plum Purple</option>
          <option value="#8FB31D">Citron Green</option>
        </select>
      </form>
      <p style={{backgroundColor: colorChoosen}}>
        Colors are the smiles of nature.
      </p>
    </div>
  );
}