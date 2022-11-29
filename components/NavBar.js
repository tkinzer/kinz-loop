import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Text } from '@nextui-org/react';

export default function NavBar({ session }) {
    const supabase = useSupabaseClient()
    return (
        <div>
            <Text
        css={{
          color: '$primary',
          fontSize: '$xl',
          padding: '$2 $4'
        }}
      >
        kinz loop
      </Text>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    );
}