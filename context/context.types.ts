export interface userData {
  id: string;
  name: string;
  avatar: string
}

export interface AppContextProps {
  isLoggedIn: boolean;
  handleLogin: () => void;
  activeUser: userData;
  handleActiveUser: (newUser: userData) => void;
}

export const INITIAL_STATE: AppContextProps = {
  isLoggedIn: false,
  handleLogin: () => {},
  activeUser: { id: '', name: '', avatar: '' },
  handleActiveUser: () => {}
}
