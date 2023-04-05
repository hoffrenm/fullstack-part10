import { useNavigate } from "react-router-native";
import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import SignInForm from "./SignInForm";
import useSignIn from "../../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate("/repositories");
    } catch (err) {
      console.log(err);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
