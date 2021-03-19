import "./App.css";

import Profile from "./components/Profile";

function App() {
  const employees = [
    {
      name: "Julio Olvera",
      stack: ["NodeJS", "React", "Sass"],
      linkedin: "https://www.linkedin.com/in/julio-olvera-ortiz-b74737166/"
    },
  ];
  return (
    <div className="App">
      <div class="row">
        <div class="col-1-of-3">
          {employees.map((employee) => {
            return <Profile name={employee.name} stack={employee.stack} linkedin={employee.linkedin}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
