
   import { EmployeeInterface } from "interfaces/employee";
import { GetQueryInterface } from "interfaces";

export interface VacationInterface {
  id?: string;
employee_id: string;
start_date?: any;
end_date?: any;
approved?: boolean;
reason?: string;
created_at?: any;
updated_at?: any;
  
  employee?: EmployeeInterface;
  _count?:{
  
  }
}

export interface VacationGetQueryInterface extends GetQueryInterface {
  id?: string;
employee_id?: string;
reason?: string;
}
