import { SignOutButton } from '@clerk/nextjs'
export default function AdminPage() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel.</p><SignOutButton />
      </div>
    );
  }
  