import RegisterForm from '@/features/auth/components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="grid gap-[3rem] lg:grid-cols-2">
      <div className="hidden min-h-[30rem] rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 lg:block"></div>
      <RegisterForm />
    </div>
  );
}
