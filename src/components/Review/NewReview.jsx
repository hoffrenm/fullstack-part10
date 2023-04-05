import { Formik } from "formik";
import { View } from "react-native";
import { useMutation } from "@apollo/client";
import * as yup from "yup";
import ReviewForm from "./ReviewForm";
import { ADD_REVIEW } from "../../graphql/mutations";
import { useNavigate } from "react-router-native";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.number().required().min(0).max(100),
  text: yup.string(),
});

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const NewReview = () => {
  const [createReview] = useMutation(ADD_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const body = { ...values, rating: Number(values.rating) };

    try {
      await createReview({
        variables: { review: body },
      });

      navigate("/repositories");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm submit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default NewReview;
