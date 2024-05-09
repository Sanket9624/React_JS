import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [copyBtn, setCopyBtn] = useState(true);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$^&%*_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setCopyBtn(true); 
  }, [length, charAllow, numberAllow]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopyBtn(false); 
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-center text-white bg-gray-800 p-4'>
        <h1 className='p-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden '>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 text-black'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard} style={{ backgroundColor: copyBtn ? 'blue' : 'green' }} className='outline-none bg-blue-700 py-0.5 px-2 text-center shrink-0'>{copyBtn ? 'copy' : 'copied'}</button>
        </div>
        <div className='flex text-sm gap-x-2 mt-2 ml-1 '>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value); setCopyBtn(true); }}
            />
            Length : {length}
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id='numberInput'
              onClick={() => {
                setNumberAllow((prev) => !prev);
                setCopyBtn(true);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id='charInput'
              onClick={() => {
                setCharAllow((prev) => !prev);
                setCopyBtn(true);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
