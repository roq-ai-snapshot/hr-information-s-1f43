
    interface AppConfigInterface {
      ownerRoles: string[],
      customerRoles: string[],
      tenantRoles: string[],
      tenantName: string,
      applicationName: string
      addOns: string[]
      ownerAbilities: string[],
      customerAbilities: string[],
      getQuoteUrl: string
    }
    export const appConfig: AppConfigInterface = {"ownerRoles":["Business Owner"],"customerRoles":["Guest"],"tenantRoles":["Business Owner","HR Manager","Payroll Administrator","Employee","Accountant"],"tenantName":"Company","applicationName":"HR Information System","addOns":["file upload","chat","notifications","file"],"customerAbilities":["Read company information","Read user information","View employee details","Browse vacation details"],"ownerAbilities":["Manage company information","Manage employee data","Manage payroll","Manage vacation requests"],"getQuoteUrl":"https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/d2ed8272-7eb3-4fbe-ad98-734c4c24f141"}
  