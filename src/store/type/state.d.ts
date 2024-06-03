import { IProfile } from "../../types/app";

interface IAuthState {
   // profile: any;
   isLogin: boolean;
   token: string;
   profile: IProfile;
}
