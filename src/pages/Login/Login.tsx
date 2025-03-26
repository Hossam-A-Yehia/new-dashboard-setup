import FormField from '@/components/molecules/FormField/FormField';
import { Formik, Form } from 'formik';

const Login = () => {
  return (
    <Formik initialValues={{ username: '' }} onSubmit={(values) => console.log(values)}>
      {() => (
        <Form>
          <FormField
            id="username"
            name="username"
            label="Username"
            type="text"
            placeholder="Enter username"
            errors={'username is required'}
            touched={true}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
