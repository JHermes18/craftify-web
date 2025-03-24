import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordFormSchema } from '../utils/formValidationSchema';
import { confettiEffects } from '@/utils/confetti';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPasswordForm() {
  const form = useForm({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast('Reset password was sent to your email successfully!');
    confettiEffects();
  };

  return (
    <Card className="h-fit border-none shadow-none">
      <CardContent>
        <h2 className="text-3xl font-semibold">Forgot Password?</h2>
        <p className="text-muted-foreground mt-2 mb-4 text-sm">
          No worries, we&apos;ll send you reset instructions.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-1 w-full">
              Reset Password
            </Button>

            <Link to="/login">
              <Button
                variant="secondary"
                icon={ArrowLeft}
                iconPlacement="left"
                className="w-full"
                disabled={true}
              >
                Back to Login
              </Button>
            </Link>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
