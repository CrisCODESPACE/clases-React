// import { UserProvider } from "./context/UserContext";
// import UserProfileComponent from "./components/UserProfileComponent";
// import UserSettingsComponent from "./components/UserSettingsComponent";
import "./App.css";

// function App() {
//   return (
//     <>
//       <UserProvider>
//         <div>
//           <h1>Ejemplo de useContext</h1>
//           <UserProfileComponent />
//           <UserSettingsComponent />
//         </div>
//       </UserProvider>
//     </>
//   );
// }

// IMPORTACIONES
// import { CounterProvider } from "./context/CounterContext";
// import DisplayCounterComponent from "./components/DisplayCounterComponent";
// import IncrementButtonComponent from "./components/IncrementButtonComponent";

// function App() {
//   return (
//     <CounterProvider>
//       <h1>Contador</h1>
//       <DisplayCounterComponent />
//       <IncrementButtonComponent />
//     </CounterProvider>
//   );
// }

//IMPORTACIONES
import ThemeButtonComponent from "./components/ThemeButtonContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <h1>Cambio de tema</h1>
      <ThemeButtonComponent />
    </ThemeProvider>
  );
}

export default App;
