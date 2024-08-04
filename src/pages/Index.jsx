import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from '@tanstack/react-query';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  currentAddress: z.string().min(5, { message: "Current address is required." }),
  employmentStatus: z.enum(["employed", "self-employed", "unemployed", "retired", "student"]),
  employer: z.string().optional(),
  income: z.string().min(1, { message: "Income information is required." }),
  rentalHistory: z.string().min(10, { message: "Rental history is required." }),
  references: z.string().min(10, { message: "At least one reference is required." }),
  moveInDate: z.string().min(1, { message: "Desired move-in date is required." }),
  leaseTerm: z.enum(["6months", "1year", "2years", "other"]),
  petInfo: z.string().optional(),
  vehicleInfo: z.string().optional(),
  additionalOccupants: z.string().optional(),
  criminalHistory: z.string().optional(),
  evictionHistory: z.string().optional(),
  bankruptcyHistory: z.string().optional(),
  specialAccommodations: z.string().optional(),
  consentBackgroundCheck: z.boolean().refine(value => value === true, {
    message: "You must agree to a background check.",
  }),
  consentCreditCheck: z.boolean().refine(value => value === true, {
    message: "You must agree to a credit check.",
  }),
  signature: z.string().min(2, { message: "Signature is required." }),
});

const Index = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      currentAddress: "",
      employmentStatus: "employed",
      employer: "",
      income: "",
      rentalHistory: "",
      references: "",
      moveInDate: "",
      leaseTerm: "1year",
      petInfo: "",
      vehicleInfo: "",
      additionalOccupants: "",
      criminalHistory: "",
      evictionHistory: "",
      bankruptcyHistory: "",
      specialAccommodations: "",
      consentBackgroundCheck: false,
      consentCreditCheck: false,
      signature: "",
    },
  });

  const submitApplication = async (values) => {
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  function onSubmit(values) {
    submitApplication(values);
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Application Submitted Successfully!</h2>
          <p className="text-gray-600">Thank you for submitting your rental application. We will review your information and get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Rental Application Form</h1>
        <h2 className="text-xl font-semibold mb-4">Property Address: 123 Main St, Anytown, USA</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Current St, Anytown, USA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="employmentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employment Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="employed">Employed</SelectItem>
                      <SelectItem value="self-employed">Self-employed</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="employer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employer (if applicable)</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="income"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Income</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="5000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rentalHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rental History</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide details of your last 2 rental experiences, including landlord contact information."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="references"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>References</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide at least two personal or professional references with their contact information."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="moveInDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desired Move-in Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="leaseTerm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Lease Term</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select lease term" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="6months">6 months</SelectItem>
                      <SelectItem value="1year">1 year</SelectItem>
                      <SelectItem value="2years">2 years</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="petInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet Information (if applicable)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide details about any pets you have (type, breed, age, weight)."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vehicleInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Information (if applicable)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide details about any vehicles you own (make, model, year, license plate)."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalOccupants"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Occupants (if any)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please list any additional occupants who will be living in the property (name, age, relationship)."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="criminalHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Criminal History</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please disclose any criminal history. If none, please write 'None'."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="evictionHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Eviction History</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please disclose any eviction history. If none, please write 'None'."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bankruptcyHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bankruptcy History</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please disclose any bankruptcy filings. If none, please write 'None'."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specialAccommodations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Accommodations</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe any special accommodations you may need."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consentBackgroundCheck"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I consent to a background check
                    </FormLabel>
                    <FormDescription>
                      By checking this box, you agree to allow us to perform a background check.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consentCreditCheck"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I consent to a credit check
                    </FormLabel>
                    <FormDescription>
                      By checking this box, you agree to allow us to perform a credit check.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="signature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Signature</FormLabel>
                  <FormControl>
                    <Input placeholder="Type your full name as signature" {...field} />
                  </FormControl>
                  <FormDescription>
                    By signing, you certify that all information provided is true and accurate.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-sm text-gray-500 mt-4">
              <p>This application is subject to approval. We comply with all fair housing laws and do not discriminate based on race, color, religion, sex, national origin, disability, or familial status.</p>
              <p className="mt-2">Your privacy is important to us. The information collected in this application will be used solely for the purpose of evaluating your rental application and will not be shared with third parties except as required by law.</p>
            </div>

            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Index;
