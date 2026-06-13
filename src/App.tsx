import Aurora from './components/Aurora';
import SpotlightCard from './components/SpotlightCard';
import ShinyText from './components/ShinyText';

/* ---------- 简约线条图标 ---------- */
const PhoneIcon = () => (
  <svg className="w-4 h-4 text-[#d4a844]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-[#d4a844]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-4 h-4 text-[#d4a844]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

/* ---------- 品牌色 ---------- */
const BRAND_GOLD = '#d4a844';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 背景层：深色基底 + Aurora 极光 */}
      <div className="fixed inset-0 z-0 bg-[#080b0f]">
        <Aurora
          colorStops={['#1a2e3e', '#1e3a2e', '#3a2e1e']}
          amplitude={0.8}
          blend={0.4}
          speed={0.1}
        />
      </div>

      {/* 内容层 */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-8">
        <SpotlightCard
          className="w-full max-w-lg"
          spotlightColor="rgba(212, 168, 68, 0.10)"
        >
          {/* ===== 品牌区 ===== */}
          <div className="flex flex-col items-center mb-8 text-center">
            {/* Logo */}
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-[#0d7a3f] to-[#d4a844] flex items-center justify-center text-white text-xs font-bold tracking-wider">
              恒六
            </div>
            <ShinyText
              text="Heng6 恒六智能照明"
              className="text-2xl sm:text-3xl font-bold tracking-wider"
              shineColor={BRAND_GOLD}
              color="#a0a0a0"
              speed={3}
              spread={150}
            />
          </div>

          {/* ===== 个人信息 ===== */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">
              游成敏
            </h2>
            <p className="text-[#e0e0e0] text-sm sm:text-base mb-3">顾问</p>
            <div className="flex items-center justify-center gap-2 text-[#e0e0e0] text-sm">
              <PhoneIcon />
              <span>电话：136 2038 9206</span>
            </div>
          </div>

          {/* 分割线 */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* ===== 主营业务 ===== */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 text-center">
              主营业务
            </h3>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-[#e0e0e0] text-sm">
              <span>无主灯</span>
              <span className="text-neutral-600">|</span>
              <span>智慧酒店</span>
              <span className="text-neutral-600">|</span>
              <span>智能灯光</span>
              <span className="text-neutral-600">|</span>
              <span>灯光设计服务</span>
              <span className="text-neutral-600">|</span>
              <span>智控设计落地服务</span>
            </div>
          </div>

          {/* 分割线 */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* ===== 线下门店 ===== */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 text-center">
              线下门店
            </h3>
            <div className="space-y-3 text-[#e0e0e0] text-sm">
              <div className="flex items-start justify-center gap-2">
                <LocationIcon />
                <span>智能体验馆：中国·古镇 | 星光联盟 9楼A区04卡</span>
              </div>
              <div className="flex items-start justify-center gap-2">
                <LocationIcon />
                <span>制造中心：中国·江门 | 江海区南山路高新区电子信息产业港3号楼7F</span>
              </div>
            </div>
          </div>

          {/* 分割线 */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* ===== 其他信息 ===== */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* 二维码 */}
            <div className="w-24 h-24 rounded-xl flex items-center justify-center bg-white/5 p-1.5 border border-white/5">
              <img src="/qr-code.svg" alt="扫码查看名片" className="w-full h-full" />
            </div>
            {/* 官网 */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-neutral-400 text-xs mb-1">
                <GlobeIcon />
                <span>官网</span>
              </div>
              <ShinyText
                text="www.heng6zm.com"
                className="text-sm font-medium"
                shineColor={BRAND_GOLD}
                color="#6b7280"
                speed={4}
                spread={120}
              />
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default App;
