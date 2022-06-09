import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function LoginForm() {
  const [formEnviado, setFormEnviado] = useState(false);
  return (
    <>
      <Formik
        className="formulario"
        initialValues={{
          name: "",
          mail: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.name) {
            errores.name = "Required Field";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre solo puede contener letras y espacios.";
          }

          if (!valores.mail) {
            errores.mail = "Required Field";
          } else if (
            !/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(
              valores.mail
            )
          ) {
            errores.mail =
              "El Email solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }
          if (!valores.password) {
            errores.password = "Required Field";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/.test(
              valores.password
            )
          ) {
            errores.password =
              "La contraseña debe contener mayusculas, numeros, caract. esp, min 8 caract.";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          console.log(valores);
          resetForm();
          console.log("Formulario enviado");
          setFormEnviado(true);
          setTimeout(() => setFormEnviado(false), 3000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              ></Field>
              <ErrorMessage
                name="name"
                component={() => <div className="error">{errors.name}</div>}
              />
            </div>
            <div>
              <label htmlFor="nombre">Email</label>
              <Field
                type="text"
                id="mail"
                name="mail"
                placeholder="Email"
              ></Field>
              <ErrorMessage
                name="mail"
                component={() => <div className="mail">{errors.mail}</div>}
              />
            </div>
            <div>
              <label htmlFor="nombre">Password</label>
              <Field
                type="text"
                id="password"
                name="password"
                placeholder="Password"
              ></Field>
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="password">{errors.password}</div>
                )}
              />
            </div>
            <button type="submit">Enviar</button>
            {formEnviado && <p>Formulario enviado con exito!</p>}
          </Form>
        )}
      </Formik>
    </>
  );
}
