import { useRouter } from 'next/router';
import { useUser } from '../src/hooks/UserProvider';

export default function Login() {
  const { login } = useUser();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDatas = new FormData(e.currentTarget);
    const email = formDatas.get('email') as string;
    if (!email) return;
    login(email).then(() => {
      router.push('/');
    });
  };

  return (
    <div>
      <form
        onClick={handleSubmit}
        className="my-4 flex flex-col items-center gap-2"
      >
        <h2>Login with your email</h2>
        <input
          name="email"
          type="text"
          className="w-full border border-blue-300 bg-transparent p-2"
          placeholder="email"
        />
        <input type="submit" value="Login" />
      </form>
      <div>
        <p>Here is some emails</p>
      </div>
    </div>
  );
}
