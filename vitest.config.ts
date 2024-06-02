import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.ts', '**/*.test.tsx'], // テストファイルのパターンを指定
    environment: 'jsdom', // Reactコンポーネントのテストに必要
    // setupFiles: './vitest.setup.ts', // 必要に応じてセットアップファイルを指定
  },
});
