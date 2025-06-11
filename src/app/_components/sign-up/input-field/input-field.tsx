// import { useState } from "react";

// interface InputFieldProps {
//   type: string;
//   id: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   label: string;
//   validate?: (value: string) => string | null;
// }

// const InputField: React.FC<InputFieldProps> = ({
//   type,
//   id,
//   name,
//   value,
//   onChange,
//   label,
//   validate,
// }) => {
//   const [error, setError] = useState<string | null>(null);

//   const handleBlur = () => {
//     if (validate && value) { // بررسی اعتبارسنجی فقط اگر مقدار داشته باشد
//       const validationError = validate(value);
//       setError(validationError);
//     }
//   };

//   return (
//     <div className="relative">
//       <input
//         type={type}
//         id={id}
//         name={name}
//         className={`peer w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${
//           error ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-800"
//         }`}
//         value={value}
//         onChange={onChange}
//         onBlur={handleBlur}
//         required
//         placeholder=""
//       />
//       <label
//         htmlFor={id}
//         className={`absolute left-4 transition-all bg-white px-1 text-gray-400 ${
//           value ? "top-[-14px] text-purple-800 text-sm" : "top-2"
//         } peer-focus:top-[-14px] peer-focus:text-purple-800 peer-focus:text-sm`}
//       >
//         {label}
//       </label>
//       {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//     </div>
//   );
// };

// export default InputField;

import { Field, ErrorMessage, useFormikContext } from "formik";
import { InputFieldProps } from "./input-field.types";

const InputField: React.FC<InputFieldProps> = ({ type, name, label }) => {
  const { values } = useFormikContext<{ [key: string]: string }>(); // گرفتن مقدار از Formik

  return (
    <div className="relative">
      <Field
        type={type}
        name={name}
        className="peer w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-800 placeholder-transparent"
        placeholder={label}
        id={name}
      />
      <label
        htmlFor={name} // اتصال لیبل به اینپوت
        className={`absolute left-4 transition-all bg-white rounded-lg px-1 text-gray-400 ${
          values[name] ? "top-[-14px] text-purple-800 text-md" : "top-2"
        } peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:top-[-14px] peer-focus:text-purple-800 peer-focus:text-md cursor-text peer-focus:border-purple-600 peer-focus:border peer-focus:border-b-0 `}
      >
        {label}
      </label>
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-900 text-sm mt-1"
      />
    </div>
  );
};

export default InputField;
