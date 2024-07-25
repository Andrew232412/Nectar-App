import {useNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';

export function useNavigate() {
  const ref = useNavigationContainerRef<RootStackParamList>();

  return ref;
}
