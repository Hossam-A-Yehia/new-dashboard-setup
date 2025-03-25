import { Button } from '@mui/material';
import { t } from 'i18next';
import LanguageToggle from '@/components/atoms/LanguageToggle/LanguageToggle';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-400">{t("welcome")}</h1>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
        <LanguageToggle/>
      </div>
    </div>
  );
}

export default App;