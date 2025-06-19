import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen flex flex-col">
      {/* 顶部导航 */}
      <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur sticky top-0 z-20">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Image src="/logo.png" alt="Labubu logo" width={32} height={32} className="rounded-xl mr-2" unoptimized />
            <span className="text-pink-500">Labubu</span> 壁纸
          </div>
          <ul className="hidden md:flex gap-8 text-base font-medium">
            <li><a href="#features" className="hover:text-pink-500 transition">功能特点</a></li>
            <li><a href="#howto" className="hover:text-pink-500 transition">使用方法</a></li>
            <li><a href="#gallery" className="hover:text-pink-500 transition">图库</a></li>
          </ul>
          <a href="#gallery" className="md:hidden px-3 py-1 rounded bg-pink-500 text-white font-semibold">图库</a>
        </nav>
      </header>

      {/* Hero 区域 */}
      <section className="w-full bg-gradient-to-b from-pink-100 to-white dark:from-gray-900 dark:to-gray-950 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-2">高清 Labubu 壁纸与动态壁纸</h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-4">免费下载高清 Labubu 静态与动态壁纸。<br/>无水印，支持 iPhone 和安卓设备。</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="#gallery" className="inline-block px-8 py-3 rounded-full bg-pink-500 text-white font-bold text-lg shadow hover:bg-pink-600 transition text-base sm:text-lg w-full sm:w-auto text-center">浏览 Labubu 图库</a>
            <a href="#free-download" className="inline-block px-8 py-3 rounded-full bg-[#e5cfc2] text-[#3d2b1f] font-bold text-base sm:text-lg shadow hover:bg-[#e0bfa7] transition w-full sm:w-auto text-center">免费获取 Labubu 壁纸</a>
          </div>
          <div className="flex gap-4 mt-6">
            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">100% 免费下载</span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">新动态壁纸已上线</span>
          </div>
        </div>
      </section>

      {/* 功能特点 */}
      <section id="features" className="bg-[#f7e6df] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Labubu 壁纸核心功能</h2>
          <div className="text-center text-lg text-gray-700 mb-12">为你带来极致 Labubu 壁纸体验的全部功能。</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 第一行 */}
            <div className="flex items-start gap-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full border border-[#e5cfc2] text-[#d1a98a] text-2xl">
                {/* HD icon */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="10" width="24" height="16" rx="4" stroke="#d1a98a" strokeWidth="2"/><text x="13" y="23" fontSize="10" fontWeight="bold" fill="#d1a98a">HD</text></svg>
              </span>
              <div>
                <div className="font-bold text-xl mb-1">高分辨率</div>
                <div className="text-gray-700">高清/4K 壁纸，适配所有设备屏幕。</div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full border border-[#e5cfc2] text-[#d1a98a] text-2xl">
                {/* 动态壁纸 icon */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="10" width="24" height="16" rx="4" stroke="#d1a98a" strokeWidth="2"/><polygon points="17,15 24,18 17,21" fill="#d1a98a"/></svg>
              </span>
              <div>
                <div className="font-bold text-xl mb-1">动态壁纸</div>
                <div className="text-gray-700">让 Labubu 角色动起来的动态壁纸。</div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full border border-[#e5cfc2] text-[#d1a98a] text-2xl">
                {/* 多种格式 icon */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="10" y="10" width="16" height="16" rx="3" stroke="#d1a98a" strokeWidth="2"/><rect x="6" y="6" width="24" height="24" rx="4" stroke="#d1a98a" strokeWidth="2"/></svg>
              </span>
              <div>
                <div className="font-bold text-xl mb-1">多种格式</div>
                <div className="text-gray-700">多种尺寸与比例，完美适配不同设备。</div>
              </div>
            </div>
            {/* 第二行 */}
            <div className="flex items-start gap-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full border border-[#e5cfc2] text-[#d1a98a] text-2xl">
                {/* 极速下载 icon */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="16" stroke="#d1a98a" strokeWidth="2"/><path d="M18 11v10M18 21l-4-4M18 21l4-4" stroke="#d1a98a" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className="font-bold text-xl mb-1">极速下载</div>
                <div className="text-gray-700">文件体积优化，下载更快更便捷。</div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full border border-[#e5cfc2] text-[#d1a98a] text-2xl">
                {/* 持续更新 icon */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="16" stroke="#d1a98a" strokeWidth="2"/><path d="M24 18a6 6 0 11-6-6" stroke="#d1a98a" strokeWidth="2" strokeLinecap="round"/><path d="M18 6v6h6" stroke="#d1a98a" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className="font-bold text-xl mb-1">持续更新</div>
                <div className="text-gray-700">每周上新 Labubu 壁纸，保持新鲜。</div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full border border-[#e5cfc2] text-[#d1a98a] text-2xl">
                {/* 无水印 icon */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="10" width="24" height="16" rx="4" stroke="#d1a98a" strokeWidth="2"/><path d="M10 18h16" stroke="#d1a98a" strokeWidth="2" strokeLinecap="round"/><path d="M18 14v8" stroke="#d1a98a" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className="font-bold text-xl mb-1">无水印</div>
                <div className="text-gray-700">纯净无水印，专业美观。</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 图库（动态壁纸+静态壁纸） */}
      <section id="gallery" className="bg-[#f7e6df] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* 动态壁纸分组 */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">动态壁纸</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* 动态壁纸卡片1 */}
            <div className="max-w-[350px] w-full mb-4 break-inside-avoid rounded-xl border border-[#e5cfc2] bg-[#fff] p-4 flex flex-col items-center">
              <div className="w-full aspect-[320/568] overflow-hidden rounded-2xl flex items-center justify-center bg-[#f7e6df]" style={{aspectRatio:'320/568'}}>
                <Image src="https://i.ibb.co/Dgftbfx5/gallery1.gif" alt="可爱 Labubu" width={320} height={568} className="object-cover w-full h-[568px] rounded-2xl mb-0" unoptimized />
              </div>
              <div className="mb-1 mt-2 text-lg font-medium text-center">可爱 Labubu</div>
              <div className="mb-2 text-sm text-gray-500 text-center">多种姿态的可爱 Labubu</div>
              <div className="w-full mt-2">
                <a href="#free-download">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e5cfc2] text-[#3d2b1f] hover:bg-[#e0bfa7] h-10 px-4 py-2 w-full">获取动态壁纸</button>
                </a>
              </div>
            </div>
            {/* 动态壁纸卡片2 */}
            <div className="max-w-[350px] w-full mb-4 break-inside-avoid rounded-xl border border-[#e5cfc2] bg-[#fff] p-4 flex flex-col items-center">
              <div className="w-full aspect-[320/568] overflow-hidden rounded-2xl flex items-center justify-center bg-[#f7e6df]" style={{aspectRatio:'320/568'}}>
                <Image src="https://i.ibb.co/Jw4xfhJr/gallery2.gif" alt="多彩 Labubu" width={320} height={568} className="object-cover w-full h-[568px] rounded-2xl mb-0" unoptimized />
              </div>
              <div className="mb-1 mt-2 text-lg font-medium text-center">多彩 Labubu</div>
              <div className="mb-2 text-sm text-gray-500 text-center">色彩丰富的 Labubu 设计</div>
              <div className="w-full mt-2">
                <a href="#free-download">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e5cfc2] text-[#3d2b1f] hover:bg-[#e0bfa7] h-10 px-4 py-2 w-full">获取动态壁纸</button>
                </a>
              </div>
            </div>
            {/* 动态壁纸卡片3 */}
            <div className="max-w-[350px] w-full mb-4 break-inside-avoid rounded-xl border border-[#e5cfc2] bg-[#fff] p-4 flex flex-col items-center">
              <div className="w-full aspect-[320/568] overflow-hidden rounded-2xl flex items-center justify-center bg-[#f7e6df]" style={{aspectRatio:'320/568'}}>
                <Image src="https://i.ibb.co/JRC11m61/gallery3.gif" alt="极简 Labubu" width={320} height={568} className="object-cover w-full h-[568px] rounded-2xl mb-0" unoptimized />
              </div>
              <div className="mb-1 mt-2 text-lg font-medium text-center">极简 Labubu</div>
              <div className="mb-2 text-sm text-gray-500 text-center">简洁风格的 Labubu 艺术</div>
              <div className="w-full mt-2">
                <a href="#free-download">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e5cfc2] text-[#3d2b1f] hover:bg-[#e0bfa7] h-10 px-4 py-2 w-full">获取动态壁纸</button>
                </a>
              </div>
            </div>
          </div>
          {/* 静态壁纸分组 */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">静态壁纸</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* 静态壁纸卡片1 */}
            <div className="max-w-[350px] w-full bg-white border border-[#e5cfc2] rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-full bg-[#f7e6df] rounded-2xl px-1 pb-0 mb-4 flex justify-center items-center" style={{height: '568px'}}>
                <Image src="https://i.ibb.co/sdfvKQWd/gallery4.jpg" alt="四季 Labubu" width={320} height={568} className="rounded-2xl w-full h-[568px] object-cover mb-0" unoptimized />
              </div>
              <h3 className="font-bold text-lg mb-1">四季 Labubu</h3>
              <p className="text-gray-600 mb-4">不同季节主题的 Labubu</p>
              <a href="https://i.ibb.co/sdfvKQWd/gallery4.jpg" target="_blank" className="w-full px-4 py-2 rounded-lg bg-[#e5cfc2] hover:bg-[#e0bfa7] text-[#3d2b1f] font-semibold text-center transition">保存</a>
            </div>
            {/* 静态壁纸卡片2 */}
            <div className="max-w-[350px] w-full bg-white border border-[#e5cfc2] rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-full bg-[#f7e6df] rounded-2xl px-1 pb-0 mb-4 flex justify-center items-center" style={{height: '568px'}}>
                <Image src="https://i.ibb.co/7dkM2zD8/gallery5.jpg" alt="动态 Labubu" width={320} height={568} className="rounded-2xl w-full h-[568px] object-cover mb-0" unoptimized />
              </div>
              <h3 className="font-bold text-lg mb-1">动态 Labubu</h3>
              <p className="text-gray-600 mb-4">动画动态壁纸</p>
              <a href="https://i.ibb.co/7dkM2zD8/gallery5.jpg" target="_blank" className="w-full px-4 py-2 rounded-lg bg-[#e5cfc2] hover:bg-[#e0bfa7] text-[#3d2b1f] font-semibold text-center transition">保存</a>
            </div>
            {/* 静态壁纸卡片3 */}
            <div className="max-w-[350px] w-full bg-white border border-[#e5cfc2] rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-full bg-[#f7e6df] rounded-2xl px-1 pb-0 mb-4 flex justify-center items-center" style={{height: '568px'}}>
                <Image src="https://i.ibb.co/5gXhGLy9/gallery6.jpg" alt="暗黑 Labubu" width={320} height={568} className="rounded-2xl w-full h-[568px] object-cover mb-0" unoptimized />
              </div>
              <h3 className="font-bold text-lg mb-1">暗黑 Labubu</h3>
              <p className="text-gray-600 mb-4">适合暗黑模式的 Labubu</p>
              <a href="https://i.ibb.co/5gXhGLy9/gallery6.jpg" target="_blank" className="w-full px-4 py-2 rounded-lg bg-[#e5cfc2] hover:bg-[#e0bfa7] text-[#3d2b1f] font-semibold text-center transition">保存</a>
            </div>
            {/* 静态壁纸卡片4 */}
            <div className="max-w-[350px] w-full bg-white border border-[#e5cfc2] rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-full bg-[#f7e6df] rounded-2xl px-1 pb-0 mb-4 flex justify-center items-center" style={{height: '568px'}}>
                <Image src="https://i.ibb.co/ZyMB17j/gallery7.jpg" alt="赛车 Labubu" width={320} height={568} className="rounded-2xl w-full h-[568px] object-cover mb-0" unoptimized />
              </div>
              <h3 className="font-bold text-lg mb-1">赛车 Labubu</h3>
              <p className="text-gray-600 mb-4">动画动态壁纸</p>
              <a href="https://i.ibb.co/ZyMB17j/gallery7.jpg" target="_blank" className="w-full px-4 py-2 rounded-lg bg-[#e5cfc2] hover:bg-[#e0bfa7] text-[#3d2b1f] font-semibold text-center transition">保存</a>
            </div>
            {/* 静态壁纸卡片5 */}
            <div className="max-w-[350px] w-full bg-white border border-[#e5cfc2] rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-full bg-[#f7e6df] rounded-2xl px-1 pb-0 mb-4 flex justify-center items-center" style={{height: '568px'}}>
                <Image src="https://i.ibb.co/rGy7zMSC/gallery8.jpg" alt="暗黑 Labubu" width={320} height={568} className="rounded-2xl w-full h-[568px] object-cover mb-0" unoptimized />
              </div>
              <h3 className="font-bold text-lg mb-1">暗黑 Labubu</h3>
              <p className="text-gray-600 mb-4">适合暗黑模式的 Labubu</p>
              <a href="https://i.ibb.co/rGy7zMSC/gallery8.jpg" target="_blank" className="w-full px-4 py-2 rounded-lg bg-[#e5cfc2] hover:bg-[#e0bfa7] text-[#3d2b1f] font-semibold text-center transition">保存</a>
            </div>
            {/* 静态壁纸卡片6 */}
            <div className="max-w-[350px] w-full bg-white border border-[#e5cfc2] rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-full bg-[#f7e6df] rounded-2xl px-1 pb-0 mb-4 flex justify-center items-center" style={{height: '568px'}}>
                <Image src="https://i.ibb.co/wFRBFB80/gallery9.jpg" alt="暗黑 Labubu" width={320} height={568} className="rounded-2xl w-full h-[568px] object-cover mb-0" unoptimized />
              </div>
              <h3 className="font-bold text-lg mb-1">暗黑 Labubu</h3>
              <p className="text-gray-600 mb-4">适合暗黑模式的 Labubu</p>
              <a href="https://i.ibb.co/wFRBFB80/gallery9.jpg" target="_blank" className="w-full px-4 py-2 rounded-lg bg-[#e5cfc2] hover:bg-[#e0bfa7] text-[#3d2b1f] font-semibold text-center transition">保存</a>
            </div>
          </div>
        </div>
      </section>

      {/* 兼容设备 */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold">兼容所有主流设备</h2>
        <div className="flex flex-wrap gap-6 justify-center mt-4">
          <span className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold">iPhone</span>
          <span className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold">Android</span>
          <span className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold">iPad</span>
          <span className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold">Desktop</span>
        </div>
      </section>

      {/* 壁纸介绍与优势 */}
      <section className="bg-pink-50 dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">什么是 Labubu 壁纸</h2>
            <p className="text-gray-700 dark:text-gray-300">精心整理的高清 Labubu 静态与动态壁纸，永久免费，无水印。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">高清画质</h3>
              <p className="text-gray-600 dark:text-gray-400">精挑细选的高分辨率 Labubu 壁纸，适配所有屏幕尺寸。</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">一键下载</h3>
              <p className="text-gray-600 dark:text-gray-400">操作简单，极速下载。</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">持续更新</h3>
              <p className="text-gray-600 dark:text-gray-400">每周上新 Labubu 壁纸，保持新鲜。</p>
            </div>
          </div>
        </div>
      </section>

      {/* iPhone 设置教程 */}
      <section id="howto" className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">iPhone 设置 Labubu 动态壁纸教程</h2>
        <ol className="space-y-6 text-left">
          <li>
            <h3 className="font-semibold">1. 下载你喜欢的壁纸</h3>
            <p className="text-gray-600 dark:text-gray-400">在网盘中选择喜欢的 Labubu 壁纸，点击下载保存到设备。</p>
          </li>
          <li>
            <h3 className="font-semibold">2. 在相册中打开</h3>
            <p className="text-gray-600 dark:text-gray-400">打开相册，找到刚下载的壁纸，点击左下角分享按钮，选择「用作壁纸」。</p>
          </li>
          <li>
            <h3 className="font-semibold">3. 开启 Live Photo</h3>
            <p className="text-gray-600 dark:text-gray-400">点击左下角 Live 图标，确保已开启动态效果，然后点击右上角「设定」。</p>
          </li>
          <li>
            <h3 className="font-semibold">4. 锁屏预览</h3>
            <p className="text-gray-600 dark:text-gray-400">锁屏后点亮屏幕，即可欣赏 Labubu 动态壁纸效果。</p>
          </li>
        </ol>
      </section>

      {/* 免费下载 */}
      <section id="free-download" className="bg-[#f7e6df] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">免费下载</h2>
          <p className="text-center text-gray-700 mb-10">是的！所有 Labubu 壁纸在本站都可限时免费下载和使用。</p>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* 免费体验卡片 */}
            <div className="bg-white border border-[#e5cfc2] rounded-2xl p-8 flex flex-col shadow-sm h-full">
              <div>
                <div className="text-lg font-semibold mb-2">免费体验</div>
                <div className="text-4xl font-extrabold text-[#b97a56] mb-2">免费</div>
                <div className="text-gray-600 mb-4">免费获取 3 张壁纸。</div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 3 张壁纸</div>
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 高清壁纸</div>
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 动态壁纸</div>
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 无水印</div>
                </div>
              </div>
              <a
                href="https://pan.quark.cn/s/6bc7adf7b392"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e5cfc2] hover:bg-[#e0bfa7] text-[#3d2b1f] font-bold py-3 rounded-lg transition mb-2 mt-auto block text-center"
              >
                立即下载 ⬇
              </a>
              <div className="text-xs text-gray-500">永久免费！</div>
            </div>
            {/* 高级版卡片 */}
            <div className="bg-white border border-[#e5cfc2] rounded-2xl p-8 flex flex-col shadow-sm relative h-full">
              <div>
                <div className="text-lg font-semibold mb-2">高级版</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="line-through text-gray-400 text-2xl">￥66</span>
                  <span className="text-4xl font-extrabold text-[#b97a56]">￥0.00</span>
                  <span className="text-base text-gray-600">30 张及持续更新</span>
                </div>
                <div className="text-gray-600 mb-4">分享到社交媒体，限时获取全部高清壁纸</div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 无限下载</div>
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 高清壁纸</div>
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 动态壁纸</div>
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 无水印</div>
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 持续上新</div>
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 多设备支持</div>
                  <div className="flex items-center gap-2 mb-1 text-gray-800"><span>✓</span> 详细设置教程</div>
                </div>
              </div>
              <a
                href="https://pan.quark.cn/s/a2ebc0f9cdc9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e5cfc2] hover:bg-[#e0bfa7] text-[#3d2b1f] font-bold py-3 rounded-lg transition mb-2 mt-auto flex items-center justify-center gap-2"
              >
                分享获取高级版 <span className="text-lg">🔗</span>
              </a>
              <div className="text-xs text-gray-500">限时免费</div>
            </div>
          </div>
        </div>
      </section>

      {/* 用户评价 */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">用户评价</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 md:grid md:grid-cols-3 md:gap-8">
            {/* 评价卡片，带头像、昵称、身份、动画 */}
            {[
              { avatar: "https://i.ibb.co/0j4wbQHJ/user1.png", name: "Njn_95", role: "Labubu 粉丝", text: "终于成功了。" },
              { avatar: "https://i.ibb.co/ZzBfr3DZ/user2.png", name: "陈思", role: "Labubu 粉丝", text: "壁纸质量非常棒！动态壁纸在我的 iPhone 上效果很可爱，下载也很方便！" },
              { avatar: "https://i.ibb.co/0VMLgfvw/user3.png", name: "李明", role: "手机用户", text: "终于找到无水印的高清 Labubu 壁纸，图库很大而且经常更新，强烈推荐！" },
              { avatar: "https://i.ibb.co/60fkZLcs/user4.png", name: "王婷", role: "iPhone 用户", text: "设置教程很详细，轻松搞定动态壁纸。锁屏现在超好看，谢谢免费服务！" },
              { avatar: "https://i.ibb.co/TM7f3WJ4/user5.png", name: "张伟", role: "安卓用户", text: "在安卓手机上也能用，壁纸很可爱，画质很棒，朋友都在问我哪里下的。" },
              { avatar: "https://i.ibb.co/Y4CKBzvz/user6.png", name: "赵丽", role: "壁纸收藏家", text: "已经下载了好多 Labubu 壁纸，种类丰富，而且每周都有新壁纸。" },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[260px] max-w-xs bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 opacity-0 animate-fadein"
                style={{ animationDelay: `${i * 0.1 + 0.2}s`, animationFillMode: 'forwards' }}
              >
                <Image src={item.avatar} alt={item.name} width={48} height={48} className="rounded-full border border-gray-200 dark:border-gray-700 mb-2" unoptimized />
                <div className="font-bold text-lg text-[#b97a56]">{item.name}</div>
                <div className="text-xs text-gray-500 mb-2">{item.role}</div>
                <div className="text-gray-700 dark:text-gray-300 text-center">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">关于 Labubu 壁纸的常见问题</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">iPhone 设置 live 壁纸有什么要求？</h3>
              <p className="text-gray-600 dark:text-gray-400">手机系统需要 iOS 17 及以上；不能开启省电模式和勿扰模式，如果开启了，动态效果则无法显示。</p>
            </div>
            <div>
              <h3 className="font-semibold">为什么需要通过网盘下载壁纸？</h3>
              <p className="text-gray-600 dark:text-gray-400">因为 iPhone live 图片的传输很容易丢失动态内容，只有通过网盘才能完整保留 live photo。</p>
            </div>
            <div>
              <h3 className="font-semibold">壁纸真的免费吗？</h3>
              <p className="text-gray-600 dark:text-gray-400">是的！本站所有 Labubu 壁纸均可免费下载，无任何隐藏费用或订阅。</p>
            </div>
            <div>
              <h3 className="font-semibold">壁纸有水印吗？</h3>
              <p className="text-gray-600 dark:text-gray-400">没有，所有壁纸均为无水印高清原图，纯净美观。</p>
            </div>
            <div>
              <h3 className="font-semibold">iPhone 如何设置动态壁纸？</h3>
              <p className="text-gray-600 dark:text-gray-400">请参考我们的详细教程：下载壁纸，打开相册，点击分享-用作壁纸，开启 Live 并设为壁纸。</p>
            </div>
            <div>
              <h3 className="font-semibold">支持安卓设备吗？</h3>
              <p className="text-gray-600 dark:text-gray-400">支持！我们的壁纸适配 iPhone 和安卓多种设备，提供多种分辨率。</p>
            </div>
            <div>
              <h3 className="font-semibold">多久更新一次新壁纸？</h3>
              <p className="text-gray-600 dark:text-gray-400">我们每周都会上新 Labubu 壁纸，欢迎关注获取最新内容。</p>
            </div>
            <div>
              <h3 className="font-semibold">壁纸分辨率是多少？</h3>
              <p className="text-gray-600 dark:text-gray-400">我们提供多种分辨率，包括高清和 4K，适配各种设备屏幕。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 */}
      <footer className="bg-[#f7e6df] border-t border-[#e5cfc2] pt-16 pb-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* 左侧品牌 */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-3 mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <Image src="./logo.png" alt="Labubu logo" width={40} height={40} className="rounded-xl" unoptimized />
              <span className="text-2xl font-bold">Labubu 壁纸</span>
            </div>
            <div className="text-gray-700 text-sm mb-2">高清 Labubu 静态与动态壁纸，无水印，支持 iPhone 和安卓设备。</div>
            <div className="flex gap-3">
              <a href="https://twitter.com/shadouyoua" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-gray-900">
                {/* X (Twitter) SVG */}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path></svg>
              </a>
              <a href="mailto:contact@labubuwallpaper.cn" aria-label="Email" className="text-gray-500 hover:text-gray-900">
                {/* Email SVG */}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
              </a>
            </div>
          </div>
          {/* 右侧三列 */}
          <div className="flex-1 grid grid-cols-3 gap-8 min-w-[320px]">
            <div>
              <div className="font-bold mb-3">功能</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="#features">高清壁纸</a></li>
                <li><a href="#gallery">动态壁纸</a></li>
                <li><a href="#free-download">免费下载</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-3">图库</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="#gallery">全部壁纸</a></li>
                <li><a href="#gallery">最新壁纸</a></li>
                <li><a href="#gallery">热门壁纸</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-3">支持</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="#howto">使用方法</a></li>
                <li><a href="#faq">常见问题</a></li>
                <li><a href="mailto:contact@labubuwallpaper.cn">联系邮箱</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e5cfc2] mt-10 pt-6 flex flex-col items-center justify-center text-xs text-gray-500 gap-2 px-4">
          <div>© 2025 • Labubu 壁纸 保留所有权利。</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">隐私政策</a>
            <a href="#" className="hover:underline">服务条款</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
