import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useLogin = ({
  email,
  password,
}: {
  email: string | null;
  password: string | null;
}) => {
  const Loginquery = useQuery({
    queryKey: ['user-login'],
    enabled: !!{ email, password },
    queryFn: () =>
      axios.post('http://localhost:9000/api/login', { email, password }),
  });

  return { ...Loginquery };
};
