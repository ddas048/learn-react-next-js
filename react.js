const app = document.getElementById("app");

function Header() {
  return <h1>🔥 Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}

// ReactDOM.render(<Header />, app);
ReactDOM.render(<HomePage />, app);
