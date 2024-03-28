import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

function register() {
  const initialValues: FormValues = { email: '', password: '', confirmPassword: '' };

  const handleSubmit = (values: FormValues) => {
    console.log(values); // Substitua por sua lógica de registro
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.email) {
      errors.email = 'Campo obrigatório';
    }
    if (!values.password) {
      errors.password = 'Campo obrigatório';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'As senhas não correspondem';
    }
    return errors;
  };

  return (
    <View>
      <Text>Registro</Text>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <Form>
            <View>
              <Text>Email</Text>
              <Field type="email" name="email" as={TextInput} />
              <ErrorMessage name="email" component={Text} />
            </View>
            <View>
              <Text>Senha</Text>
              <Field type="password" name="password" as={TextInput} />
              <ErrorMessage name="password" component={Text} />
            </View>
            <View>
              <Text>Confirme a Senha</Text>
              <Field type="password" name="confirmPassword" as={TextInput} />
              <ErrorMessage name="confirmPassword" component={Text} />
            </View>
            <TouchableOpacity onPress={() =>handleSubmit()}>
              <Text>Registrar</Text>
            </TouchableOpacity>
          </Form>
        )}
      </Formik>
      <Text>Já tem uma conta? <TouchableOpacity><Text>Faça login</Text></TouchableOpacity></Text>
    </View>
  );
};

export default register;
