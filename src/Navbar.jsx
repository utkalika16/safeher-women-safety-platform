function Navbar(props) {

  return (
    <nav>

      <button
        onClick={() =>
          props.setPage("home")
        }
      >
        Home
      </button>

      <button
        onClick={() =>
          props.setPage("dashboard")
        }
      >
        Dashboard
      </button>

      <button
        onClick={() =>
          props.setPage("report")
        }
      >
        Report
      </button>

      <button
        onClick={() =>
          props.setDark(
            !props.dark
          )
        }
      >
        Dark Mode
      </button>

    </nav>
  );
}

export default Navbar;