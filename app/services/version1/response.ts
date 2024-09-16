export interface ApiSuccessResponse<T> {
  data: T;
}
export interface User {
  personalInformation: {
    fullName: string;
    email: string;
    phoneNumber: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    residenceType: string;
    orgainzarionName: string;
    userName: string;
    dateJoioned: string;
    status: string;
  };
  educationInformation: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  };
}

export interface GET_ALL_USERS_RESPONSE {
  data: User[];
}
