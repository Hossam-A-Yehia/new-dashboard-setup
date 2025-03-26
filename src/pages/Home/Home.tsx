import { Button } from '@mui/material';
import { t } from 'i18next';
import LanguageToggle from '@/components/atoms/LanguageToggle/LanguageToggle';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-400">{t("welcome")}</h1>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
        <LanguageToggle />
        <Link to="/login" className="block mt-4 text-blue-500 hover:underline">
          Go to Login
        </Link>
      </div>
    </div>
  );
}

export default Home;