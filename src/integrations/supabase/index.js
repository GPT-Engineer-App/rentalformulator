import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/* supabase integration types

### rental_applications

| name                      | type                     | format    | required |
|---------------------------|--------------------------|-----------|----------|
| id                        | integer                  | number    | true     |
| full_name                 | character varying(255)   | string    | true     |
| email                     | character varying(255)   | string    | true     |
| phone                     | character varying(20)    | string    | true     |
| current_address           | text                     | string    | true     |
| employment_status         | character varying(20)    | string    | true     |
| employer                  | character varying(255)   | string    | false    |
| income                    | numeric                  | number    | true     |
| rental_history            | text                     | string    | true     |
| references_text           | text                     | string    | true     |
| move_in_date              | date                     | string    | true     |
| lease_term                | character varying(20)    | string    | true     |
| pet_info                  | text                     | string    | false    |
| vehicle_info              | text                     | string    | false    |
| additional_occupants      | text                     | string    | false    |
| criminal_history          | text                     | string    | false    |
| eviction_history          | text                     | string    | false    |
| bankruptcy_history        | text                     | string    | false    |
| special_accommodations    | text                     | string    | false    |
| consent_background_check  | boolean                  | boolean   | true     |
| consent_credit_check      | boolean                  | boolean   | true     |
| signature                 | character varying(255)   | string    | true     |
| created_at                | timestamp with time zone | string    | false    |
| updated_at                | timestamp with time zone | string    | false    |

*/

// Hooks for rental_applications

export const useRentalApplications = () => useQuery({
    queryKey: ['rental_applications'],
    queryFn: () => fromSupabase(supabase.from('rental_applications').select('*')),
});

export const useRentalApplication = (id) => useQuery({
    queryKey: ['rental_applications', id],
    queryFn: () => fromSupabase(supabase.from('rental_applications').select('*').eq('id', id).single()),
    enabled: !!id,
});

export const useAddRentalApplication = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newApplication) => fromSupabase(supabase.from('rental_applications').insert([newApplication])),
        onSuccess: () => {
            queryClient.invalidateQueries('rental_applications');
        },
    });
};

export const useUpdateRentalApplication = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('rental_applications').update(updateData).eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('rental_applications');
        },
    });
};

export const useDeleteRentalApplication = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('rental_applications').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('rental_applications');
        },
    });
};