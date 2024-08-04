import { useQuery } from '@tanstack/react-query';
import { useSupabaseAuth } from '@/integrations/supabase/auth';
import { supabase } from '@/integrations/supabase';

const ApplicationHistory = () => {
  const { session } = useSupabaseAuth();

  const { data: applications, isLoading, error } = useQuery({
    queryKey: ['applications', session?.user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('rental_applications')
        .select('*')
        .eq('user_id', session?.user?.id)
        .order('created_at', { ascending: false });

      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!session?.user?.id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Application History</h1>
      {applications && applications.length > 0 ? (
        <ul className="space-y-4">
          {applications.map((application) => (
            <li key={application.id} className="border-b pb-4">
              <h2 className="text-lg font-semibold">Application for {application.full_name}</h2>
              <p className="text-sm text-gray-600">Submitted on: {new Date(application.created_at).toLocaleDateString()}</p>
              <p className="mt-2">Status: <span className="font-medium">{application.status || 'Pending'}</span></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default ApplicationHistory;
