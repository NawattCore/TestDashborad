'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [bg, setBg] = useState('#000000');
  const [text, setText] = useState('توصيل مجاني');

  const handleSave = async () => {
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ copouns1Text: text, copouns1Color1: bg }),
    });
    alert('تم الحفظ ✅');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">إعدادات الستايل</h1>

      <label className="block mb-2">النص:</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <label className="block mb-2">لون الخلفية:</label>
      <input
        type="color"
        value={bg}
        onChange={(e) => setBg(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        حفظ
      </button>
    </div>
  );
}
