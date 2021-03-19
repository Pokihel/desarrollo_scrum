import "./App.css";

import Profile from "./components/Profile";

function App() {
  const employees = [
    {
      name: "Julio Olvera",
      stack: ["NodeJS", "React", "Sass"],
    },
  ];
  return (
    <div className="App">
      {employees.map((employee) => {return <Profile name={employee.name} stack={employee.stack} />;})}
    </div>
  );
}

export default App;
