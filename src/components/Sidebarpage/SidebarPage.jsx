import { useNavigate } from "react-router-dom";

export default function SidebarPage() {
  const navigate = useNavigate();

  const links = [
    { icon: "user.png", label: "My Profile", route: "/profile" },
    { icon: "cert.png", label: "My Certifications", route: "/certificate" },
    { icon: "cash.png", label: "My Purchase", route: "/purchases " },
    { icon: "forword.png", label: "Log Out", route: "/" },
  ];

  return (
    <aside className="w-full md:w-64 bg-blue-50 p-4 md:p-6 space-y-6">
      <nav className="space-y-4">
        <h1 className="text-blue-900 text-3xl">Profile &gt;</h1>
        {links.map(({ icon, label, route, textClass = "" }) => (
          <div key={label} className="flex items-center space-x-2">
            <img src={`/assets/dashboard/${icon}`} alt={label} className="w-6 h-6" />
            <button
              onClick={() => navigate(route)}
              className={`nav-btn ${textClass}`}
            >
              {label} 
            </button>
          </div>
        ))}
      </nav>
    </aside>
  );
}
