import { createContext, Dispatch, SetStateAction } from 'react';

export type UserType = {
  id?: string;
  displayName: string;
  email?: string;
  createdAt?: Date;
} | null;

type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
