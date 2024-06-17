import React from 'react';
import { FormField, FormControl, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { UseFormReturn } from 'react-hook-form';


interface CustomInputProps {
    form: UseFormReturn<any>,
    name: string,
    label: string,
    placeholder: string,
    type?: string
}


const CustomInput = ({ form, name, label, placeholder, type = 'text' }: CustomInputProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <div className="form-item flex flex-center size-full max-sm:px-6">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  type={type}
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    </>
  );
};

export default CustomInput;
