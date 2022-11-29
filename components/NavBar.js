import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function NavBar({ session }) {
    const supabase = useSupabaseClient()
    return (
        <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    );
}