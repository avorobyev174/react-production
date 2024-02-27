export { userReducer, userActions } from 'entites/User/model/slice/userSlice';
export type { IUserSchema, IUser } from 'entites/User/model/types/user';
export { getUserAuthData } from 'entites/User/model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from 'entites/User/model/selectors/getUserInited/getUserInited';
export { isUserAdmin, isUserManager, getUserRoles } from 'entites/User/model/selectors/roleSelectors';
export { EUserRole } from 'entites/User/model/const/const';
