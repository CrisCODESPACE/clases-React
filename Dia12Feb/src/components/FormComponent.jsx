import useForm from "../hooks/useForm";

function FormComponent() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    age: 0,
    profession: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos enviados", values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Enviar</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}

export default FormComponent;
