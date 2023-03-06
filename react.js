const app = document.getElementById("app");

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
      <Header title="🔥 Develop. Preview. Ship. 🚀" />
    </div>
  );
}

ReactDOM.render(<HomePage />, app);
