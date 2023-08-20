import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [error, setError] = useState('');

  const handleClick = (e) => {
    setResult((prevResult) => {
      const input = e.target.name;
      let newResult = prevResult;

      // Data validations
      if (input === '=') {
        try {
          newResult = eval(prevResult);

          // Handle division by zero
          if (!isFinite(newResult)) {
            throw new Error('Cannot divide by zero');
          }

          setError('');
        } catch (error) {
          newResult = '';
          setError('Error: ' + error.message);
        }
      } else if (input === 'C') {
        newResult = '';
        setError('');
      } else {
        // Only allow valid input (numbers and operators)
        if (/^[-+*/.()0-9]+$/.test(input) && !/[*/.]{2,}|^[-+*/.()]|[-+*/.]$/.test(newResult)) {
          newResult += input;
          setError('');
        } else {
          // Handle invalid input
          newResult = '';
          setError('Error: Invalid input');
        }
      }

      return newResult;
    });
  };

  return (
    <div>
      <h1>Calculator App</h1>
      <div className="calculator mx-auto max-w-sm p-4 bg-gray-100 rounded">
        <input
          className="w-full mb-4 p-2 rounded text-black"
          type="text"
          value={error ? error : result}
          readOnly
        />

        <div className="keypad grid grid-cols-4 gap-2">
          <button
            className="operator bg-blue-500 text-white"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className="operator bg-blue-500 text-white"
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="operator bg-blue-500 text-white"
            name="*"
            onClick={handleClick}
          >
            *
          </button>
          <button
            className="operator bg-blue-500 text-white"
            name="/"
            onClick={handleClick}
          >
            /
          </button>

          <button
            className="bg-gray-200"
            name="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="bg-gray-200"
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="bg-gray-200"
            name="9"
            onClick={handleClick}
          >
            9
          </button>

          <button
            className="bg-gray-200"
            name="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="bg-gray-200"
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="bg-gray-200"
            name="6"
            onClick={handleClick}
          >
            6
          </button>

          <button
            className="bg-gray-200"
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="bg-gray-200"
            name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="bg-gray-200"
            name="3"
            onClick={handleClick}
          >
            3
          </button>

          <button
            className="bg-gray-200"
            name="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="bg-gray-200"
            name="."
            onClick={handleClick}
          >
            .
          </button>
          <button
            className="clear bg-red-500 text-white"
            name="C"
            onClick={handleClick}
          >
            Clear
          </button>
          <button
            className="equal bg-green-500 text-white"
            name="="
            onClick={handleClick}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
