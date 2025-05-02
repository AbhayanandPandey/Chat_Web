import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'
export const useAuth = create((set) =>
({
    authUser:null,
    isSigningUp: false,
    isloggingUp:false,
    isUpdatingProfilr: false,

    isCheckingAuth:true,

    checkAuth:async()=>
    {
        try {
            const res = await axiosInstance.get('/auth/check')
            set ({authUser:res.data})
        } catch (error) {
            console.log(error);
            set({authUser:null})
        }
        finally
        {
            set({isCheckingAuth:false});
        }

    }
}))