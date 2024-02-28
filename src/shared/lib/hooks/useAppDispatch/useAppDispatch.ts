import { useDispatch } from 'react-redux';
import { type TAppDispatch } from '@/app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
