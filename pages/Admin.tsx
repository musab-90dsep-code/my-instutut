import React, { useState, useEffect } from 'react';
import { EnrollmentForm } from '../types';
import { Trash2, Lock, LogOut } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';

// Extend type locally for stored data
interface StoredEnrollment extends EnrollmentForm {
  id: string;
  date: string;
  courseName: string;
}

export const Admin: React.FC = () => {
  const { content } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [enrollments, setEnrollments] = useState<StoredEnrollment[]>([]);

  useEffect(() => {
    // Check if previously logged in (simple session check)
    if (sessionStorage.getItem('adminAuth') === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    try {
      const data = localStorage.getItem('enrollments');
      if (data) {
        setEnrollments(JSON.parse(data));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded PIN for demo purposes
    if (password === '7860') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      loadData();
    } else {
      alert(content.admin.accessError);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
  };

  const clearData = () => {
    if (confirm(content.admin.deleteConfirm)) {
      localStorage.removeItem('enrollments');
      setEnrollments([]);
    }
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <SEO title={`Login - ${content.admin.title}`} />
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
          <div className="text-center mb-6">
            <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-6 w-6 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">{content.admin.loginTitle}</h1>
            <p className="text-sm text-gray-500 mt-2">{content.admin.loginSub}</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PIN: 7860"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-gray-900"
            />
            <Button type="submit" fullWidth>{content.admin.loginBtn}</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO title={content.admin.title} />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{content.admin.title}</h1>
            <p className="text-gray-600">{content.admin.subtitle}</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" onClick={clearData} className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
               <Trash2 className="h-4 w-4 mr-2" /> {content.admin.clear}
             </Button>
             <Button variant="secondary" onClick={handleLogout}>
               <LogOut className="h-4 w-4 mr-2" /> {content.admin.logout}
             </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{content.admin.table.date}</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{content.admin.table.name}</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{content.admin.table.course}</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{content.admin.table.contact}</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{content.admin.table.details}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {enrollments.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      {content.admin.empty}
                    </td>
                  </tr>
                ) : (
                  enrollments.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(item.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.fullName}</div>
                        <div className="text-sm text-gray-500">{item.gender}, {item.age}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                          {item.courseName}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.phone}</div>
                        <div className="text-sm text-gray-500">{item.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 max-w-xs truncate">{item.message || '-'}</div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};