import { useState } from 'react';

interface GenericObject {
  [key: string]: any;
}

const useForm = <T extends GenericObject>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((curState) => ({
      ...curState,
      [name]: value,
    }));
  };

  const reset = () => {
    setFormState(initialState);
  };

  return [formState, handleChange, reset] as const;
};

export default useForm;
