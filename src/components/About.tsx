const About = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="text-lg text-gray-300 leading-relaxed space-y-6 text-left">
          <p>
            高校時代にPythonやC言語、Raspberry Piに触れたことをきっかけに、プログラミングの世界に魅了されました。
          </p>
          <p>
            大学では政治経済学部に在籍し、社会科学の知見を深めながらも、研究ではPythonを用いたデータ分析など、技術的な探求を続けてきました。
          </p>
          <p>
            現在は、より表現力豊かな開発に挑戦したいという思いから、個人でTypeScriptとReactを学び、モダンなWebアプリケーション開発のスキルを磨いています。
          </p>
          <p>
            技術的バックグラウンドと社会科学系の知見を掛け合わせることで、新しい価値を生み出すことを目指しています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
