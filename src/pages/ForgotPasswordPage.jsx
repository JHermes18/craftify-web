import ForgotPasswordForm from '@/features/auth/components/ForgotPassworForm';
import React from 'react';

export default function ForgotPasswordPage() {
  return (
    <div className="grid gap-[3rem] lg:grid-cols-2">
      <ForgotPasswordForm />
      <div className="hidden min-h-[30rem] rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 lg:block"></div>
    </div>
  );
}
