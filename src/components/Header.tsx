import reactLogo from "../assets/react.svg";

export default function Header() {
  return (
    <h2 style={{ textAlign: "center", marginBottom: "2px" }}>
    <a
      href="https://github.com/attila5287/hackerrank-react-employee-validation"
      target="_blank"
    >
      <img src={reactLogo} className="logo react" alt="React logo" />
      Employee Validation
    </a>
  </h2>
  );
}
