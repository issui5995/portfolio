import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// --- 編集可能なプロフィール情報 ---
// このオブジェクト内の値を書き換えてください
const profileData = {
  name: 'あなたの名前',
  age: 20,
  university: '〇〇大学',
  faculty: '△△学部',
  department: '××学科',
  bio: [
    'ここにこれまで行ってきたことや自己紹介を記入します。',
    '箇条書きで複数行にわたって記述できます。',
    '例：Web開発の学習、ハッカソンへの参加など。',
  ],
  goals: [
    'ここにこれからの目標を記入します。',
    '例：ReactとTypeScriptを使ったWebアプリケーションを開発し、ポートフォリオを充実させる。',
    '例：バックエンド開発にも挑戦し、フルスタックエンジニアを目指す。',
  ],
  githubUrl: 'https://github.com/issui5995',
};
// --------------------------------

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 md:p-12">
          {/* ヘッダー */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-lg text-gray-400 mt-2">
              {profileData.university} / {profileData.faculty}
            </p>
          </div>

          {/* 詳細情報 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400">年齢</p>
              <p className="text-xl font-semibold">{profileData.age}歳</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400">所属</p>
              <p className="text-xl font-semibold">{profileData.department}</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-center">
               <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl font-semibold hover:text-cyan-400 transition-colors duration-300"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* 自己紹介 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 border-l-4 border-cyan-400 pl-4 mb-4">
              これまで行ってきたこと
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {profileData.bio.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* これからの目標 */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 border-l-4 border-cyan-400 pl-4 mb-4">
              これからの目標
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {profileData.goals.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
