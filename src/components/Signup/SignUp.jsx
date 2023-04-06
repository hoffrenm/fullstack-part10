import { useNavigate } from "react-router-native";
import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations";
import SignUpForm from "./SignUpForm";
import useSignIn from "../../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(1, "Username must be longer")
    .max(30, "Username cannot be longer than 30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password too short")
    .max(50, "Password cannot be longer than 50 characters"),
  passwordConfirmation: yup
    .string()
    .required("You need to repeat your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUpContainer = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await createUser({ variables: { user: { username, password } } });
      await signIn({ username, password });
      navigate("/repositories");
    } catch (err) {
      console.log(err);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
