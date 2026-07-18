import "./App.css";
import Swal from "sweetalert2";
import { FaDownload } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

function App() {
  const Msg = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed)
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        else if (result.dismiss === Swal.DismissReason.cancel)
          /* Read more about handling dismissals below */
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
      });
  };

  const down = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };

  return (
    <>
      <button onClick={Msg}>click me </button>

      <button onClick={down}>
        Download Here ☠️ <FaDownload size={"40px"} />
      </button>

      <p>
        <Typewriter
          options={{
            strings: ["Hello code chal rha h", "Ravi"],
            autoStart: true,
            loop: true,
          }}
        />

      </p>
    </>
  );
}

export default App;
