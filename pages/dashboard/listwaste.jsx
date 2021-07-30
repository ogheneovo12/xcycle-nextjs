import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  FormHelperText,
  Textarea,
  Input,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";

import Admin from "../../Layouts/Admin.layout";
import api from "../../src/Utils/api";

const validation = Yup.object().shape({
  title: Yup.string().required("*"),
  asking_price: Yup.number()
    .min(0, "asking price should be greater than 0")
    .required("*"),
  description: Yup.string().required("*"),
});

function getError(field, touched, error) {
  return touched[field] && error[field] ? error[field] : "";
}
function ListWaste() {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");

  const handleSubmit = (values) => {
    setLoading(true);

    //  api.post("/")
  };
  return (
    <Flex w='70%' p={5}>
      <Formik
        initialValues={{ title: "", asking_price: 0, description: "" }}
        validationSchema={validation}
        onSubmit={handleSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Box w='70%' bg='#fff'>
            <Flex
              p={4}
              alignItems='center'
              w='100%'
              color='#fff'
              h={["10%"]}
              bg='#d1d1d1'>
              <Text>List A waste For sale</Text>
            </Flex>
            <Box p={4}>
              <form onSubmit={handleSubmit}>
                <FormControl id='title' mb={5}>
                  <FormLabel>Title</FormLabel>

                  <Input
                    name='title'
                    type='text'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                    placeholder='eg, a plastic bottle, cow manure, 5 flat tyres'
                  />
                  {errors.title && touched.title && (
                    <FormErrorMessage>
                     {errors.title}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id='asking_price' mb={5}>
                  <FormLabel>Price(N)</FormLabel>
                  <Input
                    name='asking_price'
                    type='text'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.asking_price}
                  />
                  {errors.asking_price && touched.asking_price && (
                    <FormErrorMessage>
                     {errors.asking_price}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id='description' mb={5}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    name='description'
                    type='text'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    placeholder='enter decription here'
                  />
                  <FormHelperText>
                    description should be informative and concise
                  </FormHelperText>
                  {errors.description && touched.description && (
                    <FormErrorMessage>
                     {errors.description}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Button>Submit</Button>
              </form>
            </Box>
          </Box>
        )}
      </Formik>
    </Flex>
  );
}

ListWaste.layout = Admin;

export default ListWaste;
