
export interface Profile {
  id: number;
  jobTitle: null | string;
  businessName: string | null;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  streetAddress1: string;
  streetAddress2: null | string;
  city: string;
  countryId: number;
  zipCode: string;
  hasVerifiedEmail: boolean;
  profilePhotoUrl: string;
  state: null | string;
  country: {
    countryName: string;
    countryId: number;
    countryCode: string;
    countryDialCode: string;
  };
  doesHomeService: boolean;
  roles: string;
}

export enum Role {
  ADMIN = 1,
  MANAGER = 2,
  STAFF = 3,
  CLIENT = 4,
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  id: string;
  first_name: string;
  last_name: string;
  nickname?: string;
  email: string;
  role?: Role[]
  is_active: boolean;
  profile_completed: boolean;
  created_at: string;
  updated_at: string;
  token?: string
  isAdmin?: boolean;
}

export interface userResponse {
    _id: string
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    nickname?: string,
    address: string,
    phoneNumber: string,
    position?: string,
    isCaptain: boolean,
    isOwner: boolean,
    otpVerified: false,
    location: {
        type: string,
        coordinates: [number, number]
    },
}
  export interface Order {
    id: string;
    companyName: string;
    email: string;
    location: string;
    product: string;
    capacity: number;
    pricePerTonne: number;
    supplier: string;
    supplierPrice: number;
    shippingCost: number;
    negotiatePrice: boolean;
    priceRange: number;
    savedStatus: string;
    status: string;
    docUrl: string | null;
    buyerId: string | null;
    supplierId: string | null;
    accountManagerId: string | null;
    userId: string;
    createdAt: string; 
    updatedAt: string; 
    message?: string
    success?: boolean;
  }
export interface RegisterProductResponse {
  success: boolean;
  message: string;
}

export interface sessionResponse {
  success: boolean;
  message: string;
}
export interface deleteOrderResponse {
  success: boolean;
  message: string;
}

 export interface CreateOrderResponse {
  orders?: Order[]; 
  message?:string;
  success?: boolean;
  msg?:string
}

export type GetOrderResponse = Order | Order[];

export interface ApiError {
  msg: string;
  status: number;
}

export interface ErrorPayload {
  response?: {
    data?: {
      error?: string;
      message?: string;
    };
    status: number;
  };
}


export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  email: string;
  phone_number: string;
  user_id: string;
  email_verified: boolean;
  phone_verified: boolean;
  profile: object;
  user: {
    id: string,
    firstName: string;
    lastName: string;
    email: string;
    token?: string;
    hasRegisteredProduct: boolean;
  };
}

export interface forgotPasswordResponse {
  success: boolean;
  message: string;
}
export interface logoutResponse {
  success: boolean;
  message: string;
}

export interface GetOverviewResponse {
  success: boolean;
  message: string;
  data: {
    overview: {
      totalEarning: number;
      totalBooked: number;
    };
  };
}

