export interface User {
  userID: string;
  username: string;
  fullName: string;
  mobileNumber: string;
  salt: string;
  hash: string;
  temporatySalt: string;
  temporaryHash: string;
  email: string;
  completedRegistration: string;
  registrationDate: number;
  groupID: string;
  lockoutCounter: number;
  louckoutYN: boolean;
  verified: boolean;
  acceptedTermsAndConditions: boolean;
  onBoardingCompleted: boolean;
  businessID: string;
}

export class HttpResponse {
  success: boolean;
  status: string;
  message: string;
  sessionID?: string;
  data?: any;
  token?: string;
  error?: string;
  user?: User;
  errcode?: string;
}
