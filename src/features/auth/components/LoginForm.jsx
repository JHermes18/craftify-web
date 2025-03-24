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
import { loginFormSchema } from '../utils/formValidationSchema';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { confettiEffects } from '@/utils/confetti';

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast('Login successfully!');
    confettiEffects();
  };

  return (
    <Card className="h-fit border-none shadow-none">
      <CardContent>
        <h2 className="text-3xl font-semibold">Welcome Back!</h2>
        <p className="text-muted-foreground mt-2 mb-4 text-sm">
          Log in to continue your journey with us.
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-blue-500"
              >
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="mt-1 w-full">
              Log in
            </Button>
          </form>
          <p className="text-muted-foreground mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/register">
              <span className="font-semibold text-blue-500">Register Now</span>
            </Link>
          </p>
        </Form>
      </CardContent>
    </Card>
  );
}
