import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white py-5 px-4 text-center border-t border-emerald-800">
      <div className="w-[94%] max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm font-medium text-emerald-100">
          &copy; 2026 +100 Artes e Diagramas de Nutrição. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
