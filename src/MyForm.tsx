import { Button, TextField } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "./MyField";

interface Values {
  beginningDate: string;
  endingDate: string;
  zamena: string;
  type: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ beginningDate: "", endingDate: "", zamena: "", type: "" }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name="beginningDate"
              placeholder="beginning date"
              component={MyField}
            />
          </div>
          <div>
            <Field
              name="endingDate"
              placeholder="ending date"
              component={MyField}
            />
          </div>
            <div>
                <Field
                    name="zamena"
                    placeholder="zamena"
                    component={MyField}
                />
            </div>
            <div>
                <Field
                    name="type"
                    placeholder="type"
                    component={MyField}
                />
            </div>
          <Button type="submit">submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
