import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [category, setCategory] = useState('');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (result !== '') {
      const newRecord = {
        weight,
        height,
        bmi: result,
        category,
      };

      setTableData([...tableData, newRecord]);
    }
  }, [result, category]);

  const calculateBMI = () => {
    const bmi = weight / Math.pow(height / 100, 2);
    setResult(bmi.toFixed(2));

    if (bmi < 18.5) {
      setCategory('Delgado');
    } else if (bmi >= 18.5 && bmi < 25) {
      setCategory('Normal');
    } else {
      setCategory('Sobrepeso');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <div className="input-container">
        <label>Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Altura (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calcular</button>
      {result && (
        <div className="result">
          Tu IMC es: {result} ({category})
        </div>
      )}
      {tableData.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Peso (kg)</th>
              <th>Altura (cm)</th>
              <th>IMC</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((record, index) => (
              <tr key={index}>
                <td>{record.weight}</td>
                <td>{record.height}</td>
                <td>{record.bmi}</td>
                <td>{record.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    <h2>Autor: Jeremy Carrasco - 7164 </h2>
    <h2>Estadistica-SOFTWARE 3</h2>
    </div>

  );
}

export default App;