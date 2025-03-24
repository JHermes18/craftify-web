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
import { registerFormSchema } from '../utils/formValidationSchema';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { confettiEffects } from '@/utils/confetti';
import { toast } from 'sonner';

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'buyer',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast('You have created an account successfully!');
    confettiEffects();
  };

  return (
    <Card className="h-fit border-none shadow-none">
      <CardContent>
        <h2 className="text-3xl font-semibold">Create an account</h2>
        <p className="text-muted-foreground mt-2 mb-4 text-sm">
          Start exploring endless possibilities.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <FormLabel>Choose your role</FormLabel>
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value === 'buyer'}
                      onCheckedChange={() => field.onChange('buyer')}
                    />
                    Buyer
                  </label>
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value === 'seller'}
                      onCheckedChange={() => field.onChange('seller')}
                    />
                    Seller
                  </label>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full">
              Register
            </Button>
          </form>
          <p className="text-muted-foreground mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link to="/login">
              <span className="font-semibold text-blue-500">Login Now</span>
            </Link>
          </p>
        </Form>
      </CardContent>
    </Card>
  );
}
