import React from "react";
import { actions } from "../actions";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

class InformationComponent extends React.Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values, { setSubmitting }) => {
            this.props.loadUserData(values.name);
            setSubmitting(false);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <input
                  id="name"
                  placeholder="Github username"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="App-input-search"                
                />

                {errors.name && errors.touched && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <button
                  type="submit"
                  className="App-button-search"
                  disabled={isSubmitting}
                >
                  Search{" "}
                  <span role="img" aria-label="seach-emoji">
                    🔍
                  </span>
                </button>
              </form>
            );
          }}
        </Formik>
          
        <div className="output">{JSON.stringify(this.props.user, null, 2)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserData: (name) => dispatch(actions.loadUserData(name)),
  };
};

export const Information = connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationComponent);
