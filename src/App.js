import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function App() {
  const [inputData, setInputData] = useState([]);
  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const selectedField = (id) => {
    console.log(id);
    console.log(inputData);
  };

  const deleteSingleEntry = (id) => {
    inputData.splice(
      inputData.findIndex((a) => a.id === id),
      1
    );
    setInputData([...inputData]);
    console.log(inputData);
  };

  const DeleteSelected = () => {
    if (isSelectedAll) {
      setInputData([]);
    }
  };

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setInputData(data);
        console.log(data);
      });
  }, []);

  // useEffect(() => {
  //   console.log(inputData);
  // },[inputData]);

  return (
    <div className="App">
      <table cellSpacing={0}>
        <thead>
          <tr>
            <td colSpan="5">
              <input
                type="text"
                className="searchBar"
                placeholder="Search by name, email or role"
              />
            </td>
          </tr>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={() => {
                  setIsSelectedAll(!isSelectedAll);
                }}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inputData.map((data) => {
            return (
              <tr key={data.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={isSelectedAll || data.isSelected}
                    onChange={() => {
                      selectedField(data.id);
                    }}
                  />
                </td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.role}</td>
                <td>
                  <span className="edit">
                    <BiEdit />
                  </span>
                  <span
                    className="delete"
                    onClick={() => {
                      deleteSingleEntry(data.id);
                    }}
                  >
                    <AiOutlineDelete />
                  </span>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <button className="btnDelete" onClick={DeleteSelected}>
                Delete Selected
              </button>
            </td>
            <td colSpan="4" className="btnPages">
              <button className="btnPage">&lt;&lt;</button>
              <button className="btnPage">&lt;</button>
              <button className="btnPage active">1</button>
              <button className="btnPage">2</button>
              <button className="btnPage">3</button>
              <button className="btnPage">&gt;</button>
              <button className="btnPage">&gt;&gt;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
