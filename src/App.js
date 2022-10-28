import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <table cellSpacing={0}>
        <tr>
          <td colspan="5">
            <input
              type="text"
              className="searchBar"
              placeholder="Search by name, email or role"
            />
          </td>
        </tr>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Shivam</td>
          <td>sharma@gmail.com</td>
          <td>Member</td>
          <td>
          <span className="edit">
            <BiEdit />
          </span>
          <span className="delete">
            <AiOutlineDelete />
          </span>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Shivam</td>
          <td>sharma@gmail.com</td>
          <td>Member</td>
          <td>
          <span className="edit">
            <BiEdit />
          </span>
          <span className="delete">
            <AiOutlineDelete />
          </span>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Shivam</td>
          <td>sharma@gmail.com</td>
          <td>Member</td>
          <td>
          <span className="edit">
            <BiEdit />
          </span>
          <span className="delete">
            <AiOutlineDelete />
          </span>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Shivam</td>
          <td>sharma@gmail.com</td>
          <td>Member</td>
          <td>
          <span className="edit">
            <BiEdit />
          </span>
          <span className="delete">
            <AiOutlineDelete />
          </span>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Shivam</td>
          <td>sharma@gmail.com</td>
          <td>Member</td>
          <td>
          <span className="edit">
            <BiEdit />
          </span>
          <span className="delete">
            <AiOutlineDelete />
          </span>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btnDelete">Delete Selected</button>
          </td>
          <td colspan="4" className="btnPages">
            <button className="btnPage">&lt;&lt;</button>
            <button className="btnPage">&lt;</button>
            <button className="btnPage active">1</button>
            <button className="btnPage">2</button>
            <button className="btnPage">3</button>
            <button className="btnPage">&gt;</button>
            <button className="btnPage">&gt;&gt;</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
