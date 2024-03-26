import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface FormValues {
  email: string;
  password: string;
}

const login = () => {
  const initialValues: FormValues = { email: '', password: '' };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.email) {
      errors.email = 'Campo obrigatório';
    }
    if (!values.password) {
      errors.password = 'Campo obrigatório';
    }
    return errors;
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values); // Substitua por sua lógica de autenticação
  };

  return (
    <View>
      <Text>Login</Text>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <View>
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
            <TouchableOpacity onPress={() => handleSubmit()}>
              <Text>Entrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Text>Não tem uma conta? <TouchableOpacity><Text>Registre-se</Text></TouchableOpacity></Text>
    </View>
  );
};

export default login;
