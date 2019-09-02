import React, {
  useState,
  useReducer,
  useEffect,
  createContext,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { initialForm, formActions, initialData } from '../helpers/data';
import { getDataCalculator } from '../helpers/functions';
import formReducer from '../reducer/formReducer';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialForm);
  const [response, dispatch] = useReducer(formReducer, initialData);

  function resetForm() {
    dispatch({ type: formActions.RESET });
  }

  // Handle data form change
  useEffect(() => {
    let didCancel = false;
    localStorage.setItem('data', JSON.stringify(formData));
    const fetchData = async () => {
      dispatch({ type: formActions.START });
      try {
        const moneyPay = await getDataCalculator(formData);
        if (!didCancel) {
          dispatch({ type: formActions.SUCCESS, payload: { moneyPay } });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({
            type: formActions.FAIL,
            error: 'Failed to count insurance.',
          });
        }
      }
    };

    fetchData();
    return () => {
      didCancel = true;
    };
  }, [formData]);

  return (
    <FormContext.Provider value={[response, setFormData, resetForm]}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.any,
};

export const useForm = () => useContext(FormContext);
