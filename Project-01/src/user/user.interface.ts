
export interface IUser {
    id: number;
    role: "student";
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    email?: string;
    password: string;
    dateOfBirth: string;
    gender: "male" | "femalee";
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
  }

 