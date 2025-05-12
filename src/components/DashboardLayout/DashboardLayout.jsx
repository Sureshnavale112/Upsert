
export default function DashboardLayout({ children }) {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 bg-blue-50 p-6 space-y-4">
          <nav className="space-y-4">
            <button className="nav-btn">My Profile</button>
            <button className="nav-btn">My Certifications</button>
            <button className="nav-btn">My Purchase</button>
            <button className="nav-btn text-red-500">Log Out</button>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-white">{children}</main>
      </div>
    );
  }
  