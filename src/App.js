import React, { useState, e } from 'react';
import generator from './generate-password';

function App() {
  // using our state to set parameters for the password generator
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const generatePassword = () => {
    const pwd = generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
      symbols: isSymbols
    });
    setPassword(pwd);
  }

  return (
    <div>
      <h5>Generate a Random Password!</h5>
      <div className="container">
        <div className="row">
          <div className="col">
            <label>
              <span className="lbl-len">Length: </span>
              <input type="number" className="input-len form-control" value={length} onChange={e => setLength(e.target.value)} />
            </label>
          </div>
        </div>
          <div className="row">
            <div className="col">
              <label className="form-control">
                <input type="checkbox" className="mr-1" checked={isLowerCase} onChange={() => setIsLowerCase(val => !val)} />
                <span>Lowercase</span>
              </label>
            </div>
            <div className="col">
              <label className="form-control">
                <input type="checkbox" className="mr-1" checked={isUpperCase} onChange={() => setIsUpperCase(val => !val)} />
                <span>Uppercase</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-control">
                <input type="checkbox" className="mr-1" checked={isNumbers} onChange={() => setIsNumbers(val => !val)} />
                <span>Numbers</span>
              </label>
            </div>
            <div className="col">
              <label className="form-control">
                <input type="checkbox" className="mr-1" checked={isSymbols} onChange={() => setIsSymbols(val => !val)} />
                <span>Symbols</span>
              </label>
            </div>
          </div>
          <small><h5>Note:</h5> At least one should be true</small>
          <div className="row">
            <div className="col">
              <input type="button" className="btn btn-dark mt-2 mb-3" value="Generate Password" onClick={generatePassword} />
                <div>
                  Password: {password}
                </div>
              
            </div>
          </div>
      </div>
      <h5>App was created with help from <a href="https://www.cluemediator.com/generate-a-random-password-in-react" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h5>
      <div><h5>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></h5></div>
    </div>
  );
}

export default App;