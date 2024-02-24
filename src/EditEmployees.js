import React, { useState } from 'react';

const EditEmployees = () => {
  const [id_pracownika, setId_pracownika] = useState('');
  const [newEmployeeData, setNewEmployeeData] = useState({
    imie: '',
    dzial: '',
    nazwa_dzial: '',
    zarobki: '',
    data_urodzenia: ''
  });

  const handleEdit = () => {
    fetch(`http://localhost:8080/pracownicy/update/${id_pracownika}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployeeData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas aktualizacji pracownika');
      }
      console.log('Pracownik został zaktualizowany pomyślnie');
      // Tutaj możesz dodać logikę obsługi sukcesu aktualizacji pracownika, np. wyświetlenie komunikatu dla użytkownika
    })
    .catch(error => {
      console.error(`Wystąpił błąd podczas aktualizacji pracownika: ${error.message}`);
      // Tutaj możesz dodać logikę obsługi błędu, np. wyświetlenie komunikatu dla użytkownika
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployeeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Edycja Pracownika</h2>
      <input
        type="text"
        placeholder="ID pracownika"
        value={id_pracownika}
        onChange={(e) => setId_pracownika(e.target.value)}
      />
      <input
        type="text"
        placeholder="Imie"
        name="imie"
        value={newEmployeeData.imie}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Dział"
        name="dzial"
        value={newEmployeeData.dzial}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Nazwa działu"
        name="nazwa_dzial"
        value={newEmployeeData.nazwa_dzial}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Zarobki"
        name="zarobki"
        value={newEmployeeData.zarobki}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Data urodzenia (RRRR-MM-DD)"
        name="data_urodzenia"
        value={newEmployeeData.data_urodzenia}
        onChange={handleChange}
      />
      <button onClick={handleEdit}>Edytuj</button>
    </div>
  );
}

export default EditEmployees;
