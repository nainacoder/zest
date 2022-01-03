import React from 'react';

import { Formik, Field, Form } from 'formik';
import { DatePicker } from 'antd';
import * as Yup from 'yup'

// const EventSchema = Yup.object().shape({
//   eventName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   eventLocation: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   startDate:Yup.string().required("Input Required") ,
//   endDate: Yup.string().required("Input Required"),
// });
const Event = () => (
  <div>
    
    <Formik
      initialValues={{
        eventName: '',
        eventLocation: '',
        startDate: '',
        endDate: '',
      }}
      // validationSchema={EventSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      
    >
      {({
      setFieldValue,
      values,
      })=> (
      <Form>
        <label htmlFor="eventName">Event Name</label>
        <Field id="eventName" name="eventName" placeholder="New Year Party" />

        <label htmlFor="eventLocation">Event Location</label>
        <Field id="eventLocation" name="eventLocation" placeholder="New Delhi" />
        <label htmlFor="startDate">Start Date</label>
        <DatePicker 
                      selected={values.startDate}
                      dateFormat="l"
                      className="form-control"
                      name="startDate"
                      onChange={date => setFieldValue('startDate', date)}
                    />
        <label htmlFor="endDate">End Date</label>
        <DatePicker 
                      selected={values.startDate}
                      dateFormat="l"
                      className="form-control"
                      name="endDate"
                      onChange={date => setFieldValue('endDate', date)}
                    />

        
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
  </div>
);

export default Event
