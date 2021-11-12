import { HTMLAttributes } from "react";

type ServiceConfigParams = "port" | "basePath" | "enableStripePayments";

const serviceConfigChecked: Record<ServiceConfigParams, string | number | boolean> = {

     port: 3000,

     basePath: "http://localhost",

     enableStripePayments: false,

  };


  enum PRIORITY {

   DEFAULT,
 
   LOW,
 
   HIGH,
 
 }
 
 interface TodoItemProps {
 
   title: string;
 
   description: string;
 
   priority: PRIORITY;
 
 }
 
 export class TodoItem {
 
   description?: string;
 
   title = "Default item title";
 
   priority = PRIORITY.DEFAULT;
 
   constructor(todoItemProps: Partial<TodoItemProps> =
 
      {}) {
 
      Object.assign(this, todoItemProps);
 
   }
 
 }
 
 const item = new TodoItem({ description: "Some description" });
 
 console.debug(item.description); /* prints "Some description"*/
 
 console.debug(item.title); /* prints "Some description"*/


 type OriginalTodoItemProps = Required<Partial<TodoItemProps>>; 
 type ButtonProps = Pick<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'onSubmit' | 'className' | 'onFocus'>;

 type OriginalThemeProps = {

   colors: string[],

   elevations: string[],

   margins: string[],

   defaultTypography: string;

}
// We've highlighted the use of the keyof operator to capture all the keys of SignupFormState as a union type. When you start declaring a variable with that type, VSCode will autocomplete the type for you as shown in the screenshot here:
type CustomThemeProps {

   colors: Set<string>;

}

interface SignupFormState {

   email: string;
 
   name: string;
 
 }
 
 interface ActionPayload {
 
   key: keyof SignupFormState;
 
   value: string;
 
 }