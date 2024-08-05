import React from 'react';
import { useSupabaseAuth } from '@/integrations/supabase/auth';

const ProfileDetails = () => {
  const { session } = useSupabaseAuth();

  if (!session) {
    return <div>Please log in to view your profile details.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Profile Details</h1>
      <div>
        <p><strong>Email:</strong> {session.user.email}</p>
        <p><strong>User ID:</strong> {session.user.id}</p>
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

export default ProfileDetails;
