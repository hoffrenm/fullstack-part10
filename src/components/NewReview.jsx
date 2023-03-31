import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { View } from 'react-native';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';
import ReviewForm from './ReviewForm';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  owner: '',
  name: '',
  rating: 0,
  review: ''
};

const NewReview = () => {
  //const [createReview] = useMutation();
  // const navigate = useNavigate();

  const onSubmit = async () => {
    // const { username, password } = values;

    // try {
    //   await createReview({ username, password });
    //   navigate('/repositories');
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );

}

export default NewReview
