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
import { initialData, initialForm, getDataCalculator } from '../helpers/data';
import formReducer from '../reducer/formReducer';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialForm);
  const [response, dispatch] = useReducer(formReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const moneyPay = await getDataCalculator(formData);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', data: { moneyPay } });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [formData]);

  return (
    <FormContext.Provider value={[response, setFormData]}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.any,
};

export const useForm = () => useContext(FormContext);

// const url = 'https://hn.algolia.com/api/v1/search?query=redux';

// export default function useForm(initialForm, initialData) {
//     const [formData, setFormData] = useState(initialForm);
//     const [response, dispatch] = useReducer(formReducer, {
//       isLoading: false,
//       isError: false,
//       data: initialData,
//     });

//     useEffect(() => {
//       let didCancel = false;
//       const fetchData = async () => {
//         dispatch({ type: 'FETCH_INIT' });
//         try {
//           const result = await fetch(url);
//           if (!didCancel) {
//             dispatch({ type: 'FETCH_SUCCESS', payload: result });
//           }
//         } catch (error) {
//           if (!didCancel) {
//             dispatch({ type: 'FETCH_FAILURE' });
//           }
//         }
//       };
//       fetchData();
//       return () => {
//         didCancel = true;
//       };
//     }, [formData]);

//     return [response, setFormData];
//   }
